document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    
    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');

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

    // Generate unique booking ID
    function generateBookingId() {
        return 'AUTOLUXE-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    // Booking simulation function
    function simulateBooking(mobileNumber) {
        // Simulate booking process
        try {
            // Simulated booking details
            const bookingDetails = {
                bookingId: generateBookingId(),
                customerMobile: mobileNumber,
                bookingDate: new Date().toLocaleString(),
                status: 'Confirmed'
            };

            // Log booking details (for debugging)
            console.log('Booking Details:', bookingDetails);

            // Display success message using SweetAlert
            Swal.fire({
                title: 'Booking Confirmed!',
                html: `
                    <div class="booking-confirmation">
                        <div class="booking-detail">
                            <span class="detail-label">Booking ID:</span>
                            <span class="detail-value">${bookingDetails.bookingId}</span>
                        </div>
                        <div class="booking-detail">
                            <span class="detail-label">Mobile Number:</span>
                            <span class="detail-value">${mobileNumber}</span>
                        </div>
                        <div class="booking-detail">
                            <span class="detail-label">Booking Date:</span>
                            <span class="detail-value">${bookingDetails.bookingDate}</span>
                        </div>
                        <div class="booking-detail">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value status-confirmed">${bookingDetails.status}</span>
                        </div>
                    </div>
                    <p class="confirmation-message">
                        🚗 Your car booking is confirmed! 
                        Our AUTOLUXE team will contact you shortly to finalize the details.
                    </p>
                `,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#ff0000',
                customClass: {
                    popup: 'my-custom-popup-class',
                    htmlContainer: 'booking-details-container'
                }
            });

        } catch (error) {
            // Handle any errors during booking
            Swal.fire({
                title: 'Booking Error',
                text: 'Unable to process your booking. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Booking simulation error:', error);
        }
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
            simulateBooking(mobileInput.value);
            form.reset();
        }
    });

    // Real-time validation on input
    nameInput.addEventListener('input', validateName);
    mobileInput.addEventListener('input', validateMobile);
    emailInput.addEventListener('input', validateEmail);
});