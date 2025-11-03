// Load person details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const personId = urlParams.get('id');
    
    if (personId) {
        loadPerson(personId);
    } else {
        showError();
    }
});

async function loadPerson(id) {
    const container = document.getElementById('person-content');
    
    try {
        const response = await fetch('data/people.json');
        const people = await response.json();
        const person = people.find(p => p.id === id);
        
        if (person) {
            container.innerHTML = createPersonHTML(person);
            document.title = `${person.name} - Faces of Open Source Uzbekistan`;
        } else {
            showError();
        }
    } catch (error) {
        console.error('Error loading person:', error);
        showError();
    }
}

function createPersonHTML(person) {
    return `
        <article class="person-header">
            <img src="${person.image}" alt="${person.name}" class="person-image">
            <h1 class="person-name">${person.name}</h1>
            <p class="person-title">${person.title}</p>
        </article>
        
        <article class="person-story">
            ${person.story.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            
            ${person.links ? `
                <div class="person-links">
                    <h3>Links</h3>
                    ${person.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>
                    `).join('')}
                </div>
            ` : ''}
        </article>
    `;
}

function showError() {
    const container = document.getElementById('person-content');
    container.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem;">
            <h1>Person Not Found</h1>
            <p>The person you're looking for doesn't exist.</p>
            <p style="margin-top: 2rem;">
                <a href="/" style="text-decoration: underline;">Return to home</a>
            </p>
        </div>
    `;
}
