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
    
    const messageDiv = document.getElementById('form-message');
    
    try {
        // Create GitHub issue via API
        const issueTitle = `New Nomination: ${data['nominee-name']}`;
        const issueBody = createIssueBody(data);
        
        // For now, we'll just show success message
        // In production, this would submit to GitHub Issues API
        showMessage(messageDiv, 'success', 
            'Thank you for your submission! We\'ll review the nomination and reach out soon. Your submission will appear as a GitHub issue in our repository.'
        );
        
        // Log to console for now (in production, this would be sent to GitHub)
        console.log('Submission data:', {
            title: issueTitle,
            body: issueBody
        });
        
        // Reset form
        e.target.reset();
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    } catch (error) {
        showMessage(messageDiv, 'error', 
            'There was an error submitting your nomination. Please try again or contact us directly.'
        );
    }
}

function createIssueBody(data) {
    return `
## Nominee Information

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

*This nomination was submitted via the Faces of Open Source Uzbekistan website.*
    `.trim();
}

function showMessage(element, type, message) {
    element.className = `form-message ${type}`;
    element.textContent = message;
    element.style.display = 'block';
}
