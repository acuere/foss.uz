// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submission-form');
    
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

async function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const submissionMethod = data['submission-method'];
    
    const messageDiv = document.getElementById('form-message');
    
    try {
        if (submissionMethod === 'github') {
            // Create GitHub PR
            handleGitHubSubmission(data);
        } else {
            // Send email
            handleEmailSubmission(data);
        }
        
    } catch (error) {
        showMessage(messageDiv, 'error', 
            'There was an error submitting your nomination. Please try again or contact us directly.'
        );
    }
}

function handleGitHubSubmission(data) {
    const issueTitle = encodeURIComponent(`New Nomination: ${data['nominee-name']}`);
    const issueBody = encodeURIComponent(createIssueBody(data));
    
    // Open GitHub to create an issue (which can be converted to PR discussion)
    const githubUrl = `https://github.com/acuere/foss.uz/issues/new?title=${issueTitle}&body=${issueBody}&labels=nomination`;
    
    // Show message and open GitHub
    const messageDiv = document.getElementById('form-message');
    showMessage(messageDiv, 'success', 
        'Opening GitHub to create your nomination issue. Please complete the submission there. The issue will be reviewed by the community!'
    );
    
    // Small delay to let user see the message
    setTimeout(() => {
        window.open(githubUrl, '_blank');
    }, 1000);
}

function handleEmailSubmission(data) {
    const subject = encodeURIComponent(`New Nomination: ${data['nominee-name']}`);
    const body = encodeURIComponent(createEmailBody(data));
    
    // Create mailto link
    const mailtoUrl = `mailto:hello@facesofopensource.uz?subject=${subject}&body=${body}`;
    
    // Show message and open email client
    const messageDiv = document.getElementById('form-message');
    showMessage(messageDiv, 'success', 
        'Opening your email client to send the nomination. Please review and send the email!'
    );
    
    // Small delay to let user see the message
    setTimeout(() => {
        window.location.href = mailtoUrl;
    }, 1000);
}

function createIssueBody(data) {
    return `## Nominee Information

**Name:** ${data['nominee-name']}
**GitHub:** ${data['nominee-github'] || 'Not provided'}
**Email:** ${data['nominee-email'] || 'Not provided'}
**Location:** ${data['nominee-location']}

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

function createEmailBody(data) {
    return `Hi Faces of Open Source Uzbekistan Team,

I would like to nominate the following person to be featured:

NOMINEE INFORMATION:
Name: ${data['nominee-name']}
GitHub: ${data['nominee-github'] || 'Not provided'}
Email: ${data['nominee-email'] || 'Not provided'}
Location: ${data['nominee-location']}

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
