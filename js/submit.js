// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submission-form');
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photo-preview');
    
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
    
    // Handle photo preview
    if (photoInput) {
        photoInput.addEventListener('change', handlePhotoSelect);
    }
});

function handlePhotoSelect(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('photo-preview');
    
    if (!file) {
        preview.classList.remove('active');
        preview.innerHTML = '';
        return;
    }
    
    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        alert(t('form.photoTooLarge'));
        e.target.value = '';
        return;
    }
    
    // Validate file type
    if (!file.type.match('image/(jpeg|jpg|png)')) {
        alert(t('form.photoWrongType'));
        e.target.value = '';
        return;
    }
    
    // Show preview
    const reader = new FileReader();
    reader.onload = function(event) {
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        preview.innerHTML = `
            <img src="${event.target.result}" alt="Photo preview">
            <div class="photo-preview-info">
                ${file.name} (${sizeInMB}MB)
            </div>
        `;
        preview.classList.add('active');
    };
    reader.readAsDataURL(file);
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const submissionMethod = data['submission-method'];
    const photoFile = document.getElementById('photo').files[0];
    
    const messageDiv = document.getElementById('form-message');
    
    try {
        if (submissionMethod === 'github') {
            // Create GitHub PR
            handleGitHubSubmission(data, photoFile);
        } else {
            // Send email
            handleEmailSubmission(data, photoFile);
        }
        
    } catch (error) {
        showMessage(messageDiv, 'error', t('form.error'));
    }
}

function handleGitHubSubmission(data, photoFile) {
    const issueTitle = encodeURIComponent(`New Nomination: ${data['nominee-name']}`);
    const issueBody = encodeURIComponent(createIssueBody(data, photoFile));
    
    // Open GitHub to create an issue (which can be converted to PR discussion)
    const githubUrl = `https://github.com/acuere/foss.uz/issues/new?title=${issueTitle}&body=${issueBody}&labels=nomination`;
    
    // Show message and open GitHub
    const messageDiv = document.getElementById('form-message');
    
    let message = t('form.githubSuccess') + ' ';
    if (photoFile) {
        message += t('form.githubPhotoNote') + ' ';
    } else if (data['photo-url']) {
        message += t('form.githubPhotoUrl') + ' ';
    }
    message += t('form.githubReview');
    
    showMessage(messageDiv, 'success', message);
    
    // Small delay to let user see the message
    setTimeout(() => {
        window.open(githubUrl, '_blank');
    }, 1500);
}

function handleEmailSubmission(data, photoFile) {
    const subject = encodeURIComponent(`New Nomination: ${data['nominee-name']}`);
    const body = encodeURIComponent(createEmailBody(data, photoFile));
    
    // Create mailto link
    const mailtoUrl = `mailto:hello@facesofopensource.uz?subject=${subject}&body=${body}`;
    
    // Show message and open email client
    const messageDiv = document.getElementById('form-message');
    
    let message = t('form.emailSuccess') + ' ';
    if (photoFile) {
        message += t('form.emailPhotoNote') + ' ';
    }
    message += t('form.emailReview');
    
    showMessage(messageDiv, 'success', message);
    
    // Small delay to let user see the message
    setTimeout(() => {
        window.location.href = mailtoUrl;
    }, 1500);
}

function createIssueBody(data, photoFile) {
    let photoInfo = '';
    
    if (photoFile) {
        photoInfo = `\n\n**Portrait Photo:** Please attach the photo file (${photoFile.name}) by dragging it into this issue comment box.\n`;
    } else if (data['photo-url']) {
        photoInfo = `\n\n**Portrait Photo URL:** ${data['photo-url']}\n`;
    } else {
        photoInfo = `\n\n**Portrait Photo:** Not provided - will need to be obtained later\n`;
    }
    
    return `## Nominee Information

**Name:** ${data['nominee-name']}
**GitHub:** ${data['nominee-github'] || 'Not provided'}
**Email:** ${data['nominee-email'] || 'Not provided'}
**Location:** ${data['nominee-location']}${photoInfo}

## Open Source Contributions

**Main Projects/Contributions:**
${data['projects']}

**Impact & Achievements:**
${data['impact']}

**Relevant Links:**
${data['links'] || 'Not provided'}

---

## Submitter Information

**Submitted by:** ${data['submitter-name']}
**Submitter Email:** ${data['submitter-email']}
**Relationship:** ${data['submitter-relationship'] || 'Not specified'}

**Additional Information:**
${data['additional-info'] || 'None provided'}

---

*This nomination was submitted via the Faces of Open Source Uzbekistan website.*`;
}

function createEmailBody(data, photoFile) {
    let photoInfo = '';
    
    if (photoFile) {
        photoInfo = `\n\nPORTRAIT PHOTO: Please attach the file (${photoFile.name}) to this email before sending.`;
    } else if (data['photo-url']) {
        photoInfo = `\n\nPORTRAIT PHOTO URL: ${data['photo-url']}`;
    } else {
        photoInfo = `\n\nPORTRAIT PHOTO: Not provided`;
    }
    
    return `Hi Faces of Open Source Uzbekistan Team,

I would like to nominate the following person to be featured:

NOMINEE INFORMATION:
Name: ${data['nominee-name']}
GitHub: ${data['nominee-github'] || 'Not provided'}
Email: ${data['nominee-email'] || 'Not provided'}
Location: ${data['nominee-location']}${photoInfo}

OPEN SOURCE CONTRIBUTIONS:
${data['projects']}

IMPACT & ACHIEVEMENTS:
${data['impact']}

RELEVANT LINKS:
${data['links'] || 'Not provided'}

SUBMITTER INFORMATION:
Name: ${data['submitter-name']}
Email: ${data['submitter-email']}
Relationship: ${data['submitter-relationship'] || 'Not specified'}

ADDITIONAL INFORMATION:
${data['additional-info'] || 'None provided'}

---
Submitted via facesofopensource.uz`;
}

function showMessage(element, type, message) {
    element.className = `form-message ${type}`;
    element.textContent = message;
    element.style.display = 'block';
}
