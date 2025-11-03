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
});

// Load gallery data
async function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    try {
        const response = await fetch('data/people.json');
        const people = await response.json();
        
        if (people.length === 0) {
            gallery.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: #666;">
                    <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Coming Soon</h2>
                    <p>We're currently gathering stories and portraits of open source contributors in Uzbekistan.</p>
                    <p style="margin-top: 1rem;">
                        <a href="submit.html" style="text-decoration: underline;">Submit a nomination</a> to help us get started!
                    </p>
                </div>
            `;
            return;
        }
        
        people.forEach(person => {
            const item = createGalleryItem(person);
            gallery.appendChild(item);
        });
    } catch (error) {
        console.log('No people data found, showing placeholder');
        gallery.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: #666;">
                <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Coming Soon</h2>
                <p>We're currently gathering stories and portraits of open source contributors in Uzbekistan.</p>
                <p style="margin-top: 1rem;">
                    <a href="submit.html" style="text-decoration: underline;">Submit a nomination</a> to help us get started!
                </p>
            </div>
        `;
    }
}

// Create gallery item
function createGalleryItem(person) {
    const item = document.createElement('a');
    item.href = `person.html?id=${person.id}`;
    item.className = 'gallery-item';
    
    item.innerHTML = `
        <img src="${person.image}" alt="${person.name}" loading="lazy">
        <div class="gallery-item-info">
            <h3>${person.name}</h3>
            <p>${person.title}</p>
        </div>
    `;
    
    return item;
}
