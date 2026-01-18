// Translations for English and Uzbek
const translations = {
    en: {
        // Navigation
        'nav.allFaces': 'ALL FACES',
        'nav.about': 'ABOUT',
        'nav.submit': 'SUBMIT',
        'nav.contact': 'CONTACT',
        'nav.brand': 'Faces of Open Source Uzbekistan',
        
        // Home Page
        'home.title': 'Faces of Open Source Uzbekistan',
        'home.tagline': 'An on-going photographic documentation of the people behind the development and advancement of open source in Uzbekistan.',
        'home.comingSoon': 'Coming Soon',
        'home.gathering': "We're currently gathering stories and portraits of open source contributors in Uzbekistan.",
        'home.submitLink': 'Submit a nomination',
        'home.getStarted': 'to help us get started!',
        
        // About Page
        'about.title': 'About the Project',
        'about.mission': 'Our Mission',
        'about.missionText1': 'Faces of Open Source Uzbekistan is an on-going photographic documentation project celebrating the people behind the development and advancement of open source software in Uzbekistan and the broader Central Asian region.',
        'about.missionText2': 'Inspired by the original',
        'about.missionText3': 'project by Peter Adams, we aim to showcase the human stories, dedication, and innovation of our local open source community.',
        'about.why': 'Why This Matters',
        'about.whyText1': 'Open source software has transformed the world, yet the faces behind these revolutionary projects often remain unseen. This project puts a spotlight on the developers, maintainers, advocates, and contributors who are building the future of technology in Uzbekistan.',
        'about.whyText2': 'From Tashkent to Samarkand, from Bukhara to Khiva, talented developers are contributing to global open source projects and creating innovative solutions for local and international challenges.',
        'about.getInvolved': 'Get Involved',
        'about.involvedText1': 'Do you know someone making a significant contribution to open source in Uzbekistan? We want to feature them! Visit our',
        'about.involvedText2': 'submission page',
        'about.involvedText3': 'to nominate a person for this project.',
        'about.involvedText4': "Whether they're maintaining a popular project, contributing to major frameworks, or building tools that serve the community, we want to share their story.",
        'about.credits': 'Credits',
        'about.creditsText': 'This project is inspired by and pays homage to Peter Adams\'',
        
        // Submit Page
        'submit.title': 'Submit a Person',
        'submit.intro': 'Know someone making a significant contribution to open source in Uzbekistan? Nominate them to be featured in this project!',
        'submit.methodTitle': 'Submission Method',
        'submit.methodQuestion': 'How would you like to submit? *',
        'submit.methodGithub': 'Create GitHub Pull Request (Recommended)',
        'submit.methodEmail': 'Send via Email',
        'submit.methodHelp': 'GitHub PR allows the community to review and discuss. Email is for private submissions.',
        'submit.nomineeTitle': 'Person Being Nominated',
        'submit.fullName': 'Full Name *',
        'submit.githubUsername': 'GitHub Username',
        'submit.email': 'Email Address',
        'submit.location': 'Location in Uzbekistan *',
        'submit.locationPlaceholder': 'e.g., Tashkent, Samarkand',
        'submit.contributionsTitle': 'Open Source Contributions',
        'submit.projects': 'Main Projects/Contributions *',
        'submit.projectsPlaceholder': 'List the main open source projects they maintain or contribute to',
        'submit.impact': 'Impact & Achievements *',
        'submit.impactPlaceholder': 'Describe their impact on the open source community, notable achievements, or why they should be featured',
        'submit.links': 'Relevant Links',
        'submit.linksPlaceholder': 'GitHub profile, personal website, project links, etc. (one per line)',
        'submit.photoTitle': 'Portrait Photo (Optional)',
        'submit.uploadPhoto': 'Upload Portrait Photo',
        'submit.photoHelp': 'Upload a high-quality portrait photo (JPG or PNG, max 5MB). Black & white preferred. Recommended size: 1200x1600px (3:4 ratio).',
        'submit.photoUrl': 'Or Provide Photo URL',
        'submit.photoUrlPlaceholder': 'https://example.com/photo.jpg',
        'submit.photoUrlHelp': "If you can't upload, provide a URL to the photo (Dropbox, Google Drive, etc.)",
        'submit.submitterTitle': 'Your Information',
        'submit.yourName': 'Your Name *',
        'submit.yourEmail': 'Your Email *',
        'submit.relationship': 'Your Relationship to Nominee',
        'submit.relationshipSelect': 'Select one',
        'submit.relationshipSelf': 'Self-nomination',
        'submit.relationshipColleague': 'Colleague/Co-worker',
        'submit.relationshipCommunity': 'Community member',
        'submit.relationshipFriend': 'Friend',
        'submit.relationshipOther': 'Other',
        'submit.additionalInfo': 'Additional Information',
        'submit.additionalInfoPlaceholder': "Any other information you'd like to share",
        'submit.submitButton': 'Submit Nomination',
        'submit.nextTitle': 'What Happens Next?',
        'submit.nextText': "After you submit a nomination, we'll review the information and reach out to the nominee to arrange a photoshoot and interview. All submissions will be collected as GitHub Issues in our repository for transparency and community involvement.",
        
        // Contact Page
        'contact.title': 'Contact',
        'contact.getInTouch': 'Get in Touch',
        'contact.getInTouchText': 'Have questions about the project? Want to collaborate? Reach out to us!',
        'contact.email': 'Email:',
        'contact.github': 'GitHub:',
        'contact.contributing': 'Contributing',
        'contact.contributingText': 'This project is open source! You can contribute by:',
        'contact.contribute1': 'Submitting nominations for people to feature',
        'contact.contribute2': 'Improving the website code and design',
        'contact.contribute3': 'Sharing the project with your network',
        'contact.contribute4': 'Providing feedback and suggestions',
        'contact.contributingLink': 'Visit our',
        'contact.contributingLink2': 'GitHub repository',
        'contact.contributingLink3': 'to get started.',
        'contact.media': 'Media & Press',
        'contact.mediaText': "Journalists and media professionals interested in covering this project can reach out via email. We're happy to provide high-resolution images and additional information about featured individuals.",
        
        // Footer
        'footer.copyright': `© ${new Date().getFullYear()} Faces of Open Source Uzbekistan. All rights reserved.`,
        
        // Form Messages
        'form.photoTooLarge': 'Photo is too large! Please upload a file smaller than 5MB.',
        'form.photoWrongType': 'Please upload a JPG or PNG image.',
        'form.githubSuccess': 'Opening GitHub to create your nomination issue.',
        'form.githubPhotoNote': "Note: You'll need to attach the photo file manually in the GitHub issue (drag & drop it into the comment box).",
        'form.githubPhotoUrl': 'Photo URL has been included in the issue.',
        'form.githubReview': 'The issue will be reviewed by the community!',
        'form.emailSuccess': 'Opening your email client to send the nomination.',
        'form.emailPhotoNote': 'Please attach the photo file to your email before sending.',
        'form.emailReview': 'Please review and send the email!',
        'form.error': 'There was an error submitting your nomination. Please try again or contact us directly.',
    },
    
    uz: {
        // Navigation
        'nav.allFaces': 'BARCHA YUZLAR',
        'nav.about': 'LOYIHA HAQIDA',
        'nav.submit': 'TAKLIF QILISH',
        'nav.contact': 'ALOQA',
        'nav.brand': 'Ochiq Kodli Oʻzbekiston Yuzlari',
        
        // Home Page
        'home.title': 'Ochiq Kodli Oʻzbekiston Yuzlari',
        'home.tagline': 'Oʻzbekistonda ochiq kodli dasturiy taʼminot rivojlanishi va taraqqiyoti ortidagi insonlarning davom etayotgan foto-hujjatlashtiruvi.',
        'home.comingSoon': 'Tez Orada',
        'home.gathering': 'Hozirda biz Oʻzbekistondagi ochiq kodli loyihalarga hissa qoʻshuvchilarning hikoyalari va portretlarini toʻplamoqdamiz.',
        'home.submitLink': 'Nomzod taklif qiling',
        'home.getStarted': 'va bizga boshlashda yordam bering!',
        
        // About Page
        'about.title': 'Loyiha Haqida',
        'about.mission': 'Bizning Maqsadimiz',
        'about.missionText1': 'Ochiq Kodli Oʻzbekiston Yuzlari - bu Oʻzbekiston va Markaziy Osiyo mintaqasida ochiq kodli dasturiy taʼminot rivojlanishi ortidagi insonlarni ulugʻlaydigan davom etayotgan foto-hujjatlashtirish loyihasidir.',
        'about.missionText2': 'Peter Adamsning asl',
        'about.missionText3': 'loyihasidan ilhomlangan holda, biz mahalliy ochiq kodli jamiyatimizning insoniy hikoyalari, fidoyiligi va innovatsiyasini koʻrsatishni maqsad qilganmiz.',
        'about.why': 'Nima Uchun Bu Muhim',
        'about.whyText1': 'Ochiq kodli dasturiy taʼminot dunyoni oʻzgartirdi, ammo bu inqilobiy loyihalar ortidagi yuzlar koʻpincha koʻrinmas qoladi. Ushbu loyiha Oʻzbekistonda texnologiya kelajagini qurayotgan dasturchilar, loyiha boshqaruvchilari, tashviqotchilar va hissa qoʻshuvchilarga alohida eʼtibor qaratadi.',
        'about.whyText2': 'Toshkentdan Samarqandgacha, Buxorodan Xivagacha - iqtidorli dasturchilar global ochiq kodli loyihalarga hissa qoʻshmoqda va mahalliy hamda xalqaro muammolarni hal qilish uchun innovatsion yechimlar yaratmoqda.',
        'about.getInvolved': 'Ishtirok Eting',
        'about.involvedText1': 'Oʻzbekistonda ochiq kodli loyihalarga muhim hissa qoʻshayotgan biror kishini bilasizmi? Biz ularni namoyish qilishni xohlaymiz! Bizning',
        'about.involvedText2': 'taklif sahifamizga',
        'about.involvedText3': 'tashrif buyurib, ushbu loyiha uchun nomzod taklif qiling.',
        'about.involvedText4': "Ular mashhur loyihani boshqarayotganmi, yirik freymvorklarga hissa qoʻshayotganmi yoki jamiyatga xizmat qiluvchi vositalar yaratayotganmi - biz ularning hikoyasini baham koʻrishni xohlaymiz.",
        'about.credits': 'Minnatdorchilik',
        'about.creditsText': 'Ushbu loyiha Peter Adamsning asl loyihasidan ilhomlangan va unga hurmat sifatida yaratilgan:',
        
        // Submit Page
        'submit.title': 'Nomzod Taklif Qilish',
        'submit.intro': 'Oʻzbekistonda ochiq kodli loyihalarga muhim hissa qoʻshayotgan kishini bilasizmi? Ularni ushbu loyihada namoyish qilish uchun nomzod qiling!',
        'submit.methodTitle': 'Yuborish Usuli',
        'submit.methodQuestion': 'Qanday yuborishni xohlaysiz? *',
        'submit.methodGithub': 'GitHub Pull Request yaratish (Tavsiya etiladi)',
        'submit.methodEmail': 'Email orqali yuborish',
        'submit.methodHelp': 'GitHub PR jamiyatga koʻrib chiqish va muhokama qilish imkonini beradi. Email maxfiy takliflar uchun.',
        'submit.nomineeTitle': 'Nomzod Qilinayotgan Shaxs',
        'submit.fullName': 'Toʻliq Ismi *',
        'submit.githubUsername': 'GitHub Foydalanuvchi Nomi',
        'submit.email': 'Email Manzili',
        'submit.location': 'Oʻzbekistondagi Joylashuvi *',
        'submit.locationPlaceholder': 'masalan, Toshkent, Samarqand',
        'submit.contributionsTitle': 'Ochiq Kodli Hissalar',
        'submit.projects': 'Asosiy Loyihalar/Hissalar *',
        'submit.projectsPlaceholder': 'Ular boshqarayotgan yoki hissa qoʻshayotgan asosiy ochiq kodli loyihalarni sanab oʻting',
        'submit.impact': 'Taʼsir va Yutuqlar *',
        'submit.impactPlaceholder': 'Ochiq kodli jamiyatga ularning taʼsirini, diqqatga sazovor yutuqlarini yoki nima uchun namoyish qilinishi kerakligini tasvirlab bering',
        'submit.links': 'Tegishli Havolalar',
        'submit.linksPlaceholder': 'GitHub profili, shaxsiy veb-sayt, loyiha havolalari va boshqalar (har bir qatorda bittadan)',
        'submit.photoTitle': 'Portret Rasmi (Ixtiyoriy)',
        'submit.uploadPhoto': 'Portret Rasmini Yuklash',
        'submit.photoHelp': 'Yuqori sifatli portret rasmini yuklang (JPG yoki PNG, maksimal 5MB). Oq-qora tavsiya etiladi. Tavsiya etilgan oʻlcham: 1200x1600px (3:4 nisbati).',
        'submit.photoUrl': 'Yoki Rasm URL Manzilini Kiriting',
        'submit.photoUrlPlaceholder': 'https://example.com/photo.jpg',
        'submit.photoUrlHelp': 'Agar yuklay olmasangiz, rasm URL manzilini kiriting (Dropbox, Google Drive va boshqalar)',
        'submit.submitterTitle': 'Sizning Maʼlumotlaringiz',
        'submit.yourName': 'Ismingiz *',
        'submit.yourEmail': 'Emailingiz *',
        'submit.relationship': 'Nomzod Bilan Munosabatingiz',
        'submit.relationshipSelect': 'Birini tanlang',
        'submit.relationshipSelf': 'Oʻz-oʻzini nomzod qilish',
        'submit.relationshipColleague': 'Hamkasb/Hamkor',
        'submit.relationshipCommunity': 'Jamiyat aʼzosi',
        'submit.relationshipFriend': 'Doʻst',
        'submit.relationshipOther': 'Boshqa',
        'submit.additionalInfo': 'Qoʻshimcha Maʼlumot',
        'submit.additionalInfoPlaceholder': 'Baham koʻrishni istagan boshqa maʼlumotlar',
        'submit.submitButton': 'Nomzodni Yuborish',
        'submit.nextTitle': 'Keyingi Qadamlar',
        'submit.nextText': "Nomzodni yuborganingizdan soʻng, biz maʼlumotlarni koʻrib chiqamiz va fotosurat hamda intervyu uchun nomzod bilan bogʻlanamiz. Barcha takliflar shaffoflik va jamiyat ishtiroki uchun GitHub omborimizda Issues sifatida saqlanadi.",
        
        // Contact Page
        'contact.title': 'Aloqa',
        'contact.getInTouch': 'Biz Bilan Bogʻlaning',
        'contact.getInTouchText': 'Loyiha haqida savollaringiz bormi? Hamkorlik qilishni xohlaysizmi? Biz bilan bogʻlaning!',
        'contact.email': 'Email:',
        'contact.github': 'GitHub:',
        'contact.contributing': 'Hissa Qoʻshish',
        'contact.contributingText': 'Bu loyiha ochiq kodli! Siz quyidagi yoʻllar orqali hissa qoʻshishingiz mumkin:',
        'contact.contribute1': 'Namoyish qilish uchun nomzodlar taklif qilish',
        'contact.contribute2': 'Veb-sayt kodi va dizaynini yaxshilash',
        'contact.contribute3': 'Loyihani ijtimoiy tarmoqlaringizda ulashish',
        'contact.contribute4': 'Fikr-mulohaza va takliflar bildirish',
        'contact.contributingLink': 'Boshlash uchun',
        'contact.contributingLink2': 'GitHub omborimizga',
        'contact.contributingLink3': 'tashrif buyuring.',
        'contact.media': 'OAV va Matbuot',
        'contact.mediaText': 'Ushbu loyihani yoritishdan manfaatdor jurnalistlar va OAV mutaxassislari email orqali murojaat qilishlari mumkin. Biz yuqori sifatli rasmlar va namoyish qilingan shaxslar haqida qoʻshimcha maʼlumot berishdan mamnunmiz.',
        
        // Footer
        'footer.copyright': `© ${new Date().getFullYear()} Ochiq Kodli Oʻzbekiston Yuzlari. Barcha huquqlar himoyalangan.`,
        
        // Form Messages
        'form.photoTooLarge': 'Rasm juda katta! Iltimos, 5MB dan kichik fayl yuklang.',
        'form.photoWrongType': 'Iltimos, JPG yoki PNG formatidagi rasm yuklang.',
        'form.githubSuccess': 'Nomzod taklifi uchun GitHub ochilmoqda.',
        'form.githubPhotoNote': "Eslatma: Rasm faylini GitHub issue-ga qoʻlda biriktirish kerak boʻladi (izoh maydoniga sudrab tashlang).",
        'form.githubPhotoUrl': 'Rasm URL manzili issue-ga kiritildi.',
        'form.githubReview': 'Issue jamiyat tomonidan koʻrib chiqiladi!',
        'form.emailSuccess': 'Nomzodni yuborish uchun email dasturingiz ochilmoqda.',
        'form.emailPhotoNote': 'Iltimos, yuborishdan oldin rasm faylini emailingizga biriktiring.',
        'form.emailReview': 'Iltimos, koʻrib chiqing va emailni yuboring!',
        'form.error': 'Nomzodni yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib koʻring yoki toʻgʻridan-toʻgʻri biz bilan bogʻlaning.',
    }
};

// Get current language from localStorage or default to 'en'
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language and save to localStorage
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem('language', lang);
        updatePageTranslations(lang);
    }
}

// Get translation for a key
function t(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || translations.en[key] || key;
}

// Update all elements with data-i18n attribute
function updatePageTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key] || translations.en[key] || key;
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder !== undefined) {
                element.placeholder = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
    
    // Update placeholders separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[lang][key] || translations.en[key] || '';
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updatePageTranslations(currentLang);
    
    // Setup language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
});
