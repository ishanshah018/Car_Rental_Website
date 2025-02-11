document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Demo credentials (in real app, this would be in a database)
    const validCredentials = {
        'demo@autoluxe.com': 'password123'
    };

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            const email = emailInput.value.trim();
            const password = passwordInput.value;

            // Check credentials (demo only)
            if (validCredentials[email] === password) {
                // Store login state
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userEmail', email);

                Swal.fire({
                    title: 'Login Successful!',
                    text: 'Redirecting to payment...',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = 'payment.html';
                });
            } else {
                Swal.fire({
                    title: 'Login Failed',
                    text: 'Invalid email or password',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        }
    });

    // Real-time validation
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
});