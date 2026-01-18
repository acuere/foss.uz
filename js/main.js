// Store people data globally for language switching
let peopleData = [];

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Load gallery if on index page
    if (document.getElementById('gallery')) {
        loadGallery();
    }
    
    // Listen for language changes to update gallery titles
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                updateGalleryTitles();
            }, 50);
        });
    });
});

// Update gallery titles when language changes
function updateGalleryTitles() {
    if (peopleData.length === 0) return;
    
    const lang = getCurrentLanguage();
    document.querySelectorAll('.gallery-item').forEach(item => {
        const personId = item.dataset.personId;
        const person = peopleData.find(p => p.id === personId);
        if (person) {
            const titleEl = item.querySelector('.person-title-text');
            if (titleEl) {
                titleEl.textContent = getLocalizedText(person.title, lang);
            }
        }
    });
}

// Load gallery data
async function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    try {
        const response = await fetch('data/people.json');
        const people = await response.json();
        
        if (people.length === 0) {
            gallery.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: #666;">
                    <h2 style="font-size: 1.5rem; margin-bottom: 1rem;" data-i18n="home.comingSoon">Coming Soon</h2>
                    <p data-i18n="home.gathering">We're currently gathering stories and portraits of open source contributors in Uzbekistan.</p>
                    <p style="margin-top: 1rem;">
                        <a href="submit.html" style="text-decoration: underline;" data-i18n="home.submitLink">Submit a nomination</a>
                        <span data-i18n="home.getStarted">to help us get started!</span>
                    </p>
                </div>
            `;
            // Update translations for dynamically added content
            if (typeof updatePageTranslations === 'function') {
                updatePageTranslations(getCurrentLanguage());
            }
            return;
        }
        
        // Store people data globally for language switching
        peopleData = people;
        
        people.forEach(person => {
            const item = createGalleryItem(person);
            gallery.appendChild(item);
        });
    } catch (error) {
        console.log('No people data found, showing placeholder');
        gallery.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: #666;">
                <h2 style="font-size: 1.5rem; margin-bottom: 1rem;" data-i18n="home.comingSoon">Coming Soon</h2>
                <p data-i18n="home.gathering">We're currently gathering stories and portraits of open source contributors in Uzbekistan.</p>
                <p style="margin-top: 1rem;">
                    <a href="submit.html" style="text-decoration: underline;" data-i18n="home.submitLink">Submit a nomination</a>
                    <span data-i18n="home.getStarted">to help us get started!</span>
                </p>
            </div>
        `;
        // Update translations for dynamically added content
        if (typeof updatePageTranslations === 'function') {
            updatePageTranslations(getCurrentLanguage());
        }
    }
}

// Get localized text from an object with en/uz keys, or return string directly
function getLocalizedText(textObj, lang) {
    if (typeof textObj === 'string') {
        return textObj;
    }
    return textObj[lang] || textObj.en || '';
}

// Create gallery item
function createGalleryItem(person) {
    const lang = getCurrentLanguage();
    const title = getLocalizedText(person.title, lang);
    
    const item = document.createElement('a');
    item.href = `person.html?id=${person.id}`;
    item.className = 'gallery-item';
    item.dataset.personId = person.id;
    
    item.innerHTML = `
        <img src="${person.image}" alt="${person.name}" loading="lazy">
        <div class="gallery-item-info">
            <h3>${person.name}</h3>
            <p class="person-title-text">${title}</p>
        </div>
    `;
    
    return item;
}
