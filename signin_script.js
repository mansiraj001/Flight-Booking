document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('manual-signin-form');
    const signinButton = document.querySelector('#manual-signin-form button');

    signinForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        const usernameOrEmail = signinForm.querySelector('input[placeholder="Email or Username"]').value.trim();
        const password = signinForm.querySelector('input[placeholder="Password"]').value;

        // Basic form validation (you can add more advanced validation as needed)
        if (usernameOrEmail === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Validation successful, you can add code here to process the sign-in
        // Typically, you would make an API request to validate user credentials and start a session.
        // For demonstration purposes, you can redirect to another page (modify the URL as needed).
        window.location.href = 'dashboard.html';
    });
});
