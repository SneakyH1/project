// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    // Add a click event listener to the login button
    loginButton.addEventListener('click', function(event) {
        // Prevent the form from submitting immediately
        event.preventDefault();

        // Simple validation
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Optional: Add a loading animation or disable the button
        loginButton.innerText = 'Logging in...';
        loginButton.disabled = true;

        // Submit the form after a short delay (for demonstration purposes)
        setTimeout(() => {
            loginForm.submit(); // Submit the form
        }, 1000); // Adjust the delay as needed
    });
});