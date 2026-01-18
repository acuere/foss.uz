// Store current person data globally for language switching
let currentPerson = null;

// Load person details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const personId = urlParams.get('id');
    
    if (personId) {
        loadPerson(personId);
    } else {
        showError();
    }
    
    // Listen for language changes
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Wait a moment for the language to be set, then re-render
            setTimeout(() => {
                if (currentPerson) {
                    const container = document.getElementById('person-content');
                    container.innerHTML = createPersonHTML(currentPerson);
                }
            }, 50);
        });
    });
});

async function loadPerson(id) {
    const container = document.getElementById('person-content');
    
    try {
        const response = await fetch('data/people.json');
        const people = await response.json();
        const person = people.find(p => p.id === id);
        
        if (person) {
            currentPerson = person;
            container.innerHTML = createPersonHTML(person);
            const lang = getCurrentLanguage();
            const title = getLocalizedText(person.title, lang);
            document.title = `${person.name} - ${lang === 'uz' ? 'Oʻzbekiston Open Source Yuzlari' : 'Faces of Open Source Uzbekistan'}`;
        } else {
            showError();
        }
    } catch (error) {
        console.error('Error loading person:', error);
        showError();
    }
}

// Get localized text from an object with en/uz keys, or return string directly
function getLocalizedText(textObj, lang) {
    if (typeof textObj === 'string') {
        return textObj;
    }
    return textObj[lang] || textObj.en || '';
}

function createPersonHTML(person) {
    const lang = getCurrentLanguage();
    const title = getLocalizedText(person.title, lang);
    const story = getLocalizedText(person.story, lang);
    const linksLabel = lang === 'uz' ? 'Havolalar' : 'Links';
    
    return `
        <article class="person-header">
            <img src="${person.image}" alt="${person.name}" class="person-image">
            <h1 class="person-name">${person.name}</h1>
            <p class="person-title">${title}</p>
        </article>
        
        <article class="person-story">
            ${story.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            
            ${person.links ? `
                <div class="person-links">
                    <h3>${linksLabel}</h3>
                    ${person.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>
                    `).join('')}
                </div>
            ` : ''}
        </article>
    `;
}

function showError() {
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const container = document.getElementById('person-content');
    
    const errorTitle = lang === 'uz' ? 'Shaxs Topilmadi' : 'Person Not Found';
    const errorText = lang === 'uz' ? 'Siz qidirayotgan shaxs mavjud emas.' : "The person you're looking for doesn't exist.";
    const returnText = lang === 'uz' ? 'Bosh sahifaga qaytish' : 'Return to home';
    
    container.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem;">
            <h1>${errorTitle}</h1>
            <p>${errorText}</p>
            <p style="margin-top: 2rem;">
                <a href="/" style="text-decoration: underline;">${returnText}</a>
            </p>
        </div>
    `;
}
