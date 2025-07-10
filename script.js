let shareCount = 0;

function shareOnWhatsApp() {
    shareCount++;
    const maxShares = 5;
    const shareStatus = document.getElementById('shareStatus');
    shareStatus.textContent = `Click count: ${shareCount}/${maxShares}`;

    // Open WhatsApp with pre-written message
    const message = encodeURIComponent('Hey Buddy, Join Tech For Girls Community');
    window.open(`https://wa.me/?text=${message}`, '_blank');

    if (shareCount >= maxShares) {
        shareStatus.textContent = 'Sharing complete. Please continue.';
        document.getElementById('shareButton').disabled = true;
    }
}

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Check if WhatsApp sharing is complete
    if (shareCount < 5) {
        alert('Please complete 5 WhatsApp shares before submitting.');
        return;
    }

    // Check if form has already been submitted
    if (localStorage.getItem('formSubmitted') === 'true') {
        alert('You have already submitted the form.');
        return;
    }

    // Get form elements
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    // Disable all form inputs and buttons
    const inputs = form.querySelectorAll('input, button');
    inputs.forEach(input => input.disabled = true);

    // Show success message
    successMessage.textContent = '🎉 Your submission has been recorded. Thanks for being part of Tech For Girls!';

    // Save submission status in localStorage
    localStorage.setItem('formSubmitted', 'true');
}

// Check on page load if form was already submitted
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('formSubmitted') === 'true') {
        const form = document.getElementById('registrationForm');
        const successMessage = document.getElementById('successMessage');
        const inputs = form.querySelectorAll('input, button');
        inputs.forEach(input => input.disabled = true);
        successMessage.textContent = '🎉 Your submission has been recorded. Thanks for being part of Tech For Girls!';
    }
});