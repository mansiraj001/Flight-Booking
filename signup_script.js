
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form elements
    const signupForm = document.getElementById('manual-signup-form');
    const signupButton = document.querySelector('#manual-signup-form button');
    const signinLink = document.querySelector('p a');

    // Function to handle form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get user input
        const fullName = signupForm.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = signupForm.querySelector('input[placeholder="Email"]').value.trim();
        const password = signupForm.querySelector('input[placeholder="Password"]').value;
        const retypePassword = signupForm.querySelector('input[placeholder="Retype Password"]').value;
        const username = signupForm.querySelector('input[placeholder="Username"]').value.trim();

        // Basic form validation
        if (fullName === '' || email === '' || password === '' || retypePassword === '' || username === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== retypePassword) {
            alert('Passwords do not match. Please retype your password.');
            return;
        }

        // Validation successful, you can add code here to process the registration
        // This is where you would typically make an API request to a backend server to create the user account.

        // For demonstration purposes, you can redirect to the sign-in page (modify the URL as needed).
        window.location.href = 'signin.html';
    });

    // Add click event to the "Sign In" link
    signinLink.addEventListener('click', function() {
        // Redirect to the sign-in page (modify the URL as needed)
        window.location.href = 'signin.html';
    });
});

