document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Enhanced name validation
    function validateName() {
        const name = nameInput.value.trim();
        const nameRegex = /^[A-Za-z\s]{3,50}$/;
        if (name.length < 3 || name.length > 50) {
            nameError.textContent = 'Name must be between 3-50 characters';
            return false;
        }
        if (!nameRegex.test(name)) {
            nameError.textContent = 'Name can only contain letters and spaces';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    // Indian mobile number validation
    function validateMobile() {
        const mobile = mobileInput.value.trim();
        // Validates Indian mobile numbers starting with 6, 7, 8, or 9
        const mobileRegex = /^(\+91[-\s]?)?[6-9]\d{9}$/;
        if (!mobileRegex.test(mobile)) {
            mobileError.textContent = 'Please enter a valid Indian mobile number (10 digits)';
            return false;
        }
        mobileError.textContent = '';
        return true;
    }

    // Email validation
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

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isMobileValid = validateMobile();
        const isEmailValid = validateEmail();

        // If all validations pass
        if (isNameValid && isMobileValid && isEmailValid) {
            // Store user information in session storage
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userEmail', emailInput.value.trim());
            sessionStorage.setItem('userName', nameInput.value.trim());
            sessionStorage.setItem('userMobile', mobileInput.value.trim());

            // Show success message and redirect
            Swal.fire({
                title: 'Registration Successful!',
                text: 'Redirecting to payment...',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                window.location.href = 'payment.html';
            });
        }
    });

    // Real-time validation on input
    nameInput.addEventListener('input', validateName);
    mobileInput.addEventListener('input', validateMobile);
    emailInput.addEventListener('input', validateEmail);
});