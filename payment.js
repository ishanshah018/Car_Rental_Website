document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    const form = document.getElementById('paymentForm');
    const cardNameInput = document.getElementById('cardName');
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');

    // Get booking data from sessionStorage
    const selectedCar = JSON.parse(sessionStorage.getItem('selectedCar') || '{}');
    const pickupDate = sessionStorage.getItem('pickupDate');
    const returnDate = sessionStorage.getItem('returnDate');
    const pickupLocation = sessionStorage.getItem('pickupLocation');

    // Extract daily rate from car price
    function extractDailyRate(priceString) {
        const match = priceString.match(/₹([\d,]+)/);
        if (match) {
            return parseInt(match[1].replace(/,/g, ''));
        }
        return 3000; // Default rate if parsing fails
    }

    // Calculate rental period in days
    function calculateRentalDays(pickup, returnDate) {
        const start = new Date(pickup);
        const end = new Date(returnDate);
        const diffTime = Math.abs(end - start);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // Format currency in Indian Rupees
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    }

    // Update booking summary
    function updateBookingSummary() {
        const dailyRate = extractDailyRate(selectedCar.price);
        const days = calculateRentalDays(pickupDate, returnDate);
        const totalAmount = days * dailyRate;

        document.getElementById('carModel').textContent = selectedCar.name;
        document.getElementById('rentalPeriod').textContent = `${days} days`;
        document.getElementById('pickupDate').textContent = new Date(pickupDate).toLocaleDateString();
        document.getElementById('returnDate').textContent = new Date(returnDate).toLocaleDateString();
        document.getElementById('dailyRate').textContent = formatCurrency(dailyRate) + '/day';
        document.getElementById('totalAmount').textContent = formatCurrency(totalAmount);
    }

    // Format card number with spaces
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');
        value = value.replace(/\D/g, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        e.target.value = formattedValue;
    });

    // Format expiry date
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // Only allow numbers in CVV
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Form validation
    function validateForm() {
        let isValid = true;
        
        // Card name validation
        if (!/^[a-zA-Z\s]{3,}$/.test(cardNameInput.value)) {
            document.getElementById('cardNameError').textContent = 'Please enter a valid name';
            isValid = false;
        }

        // Card number validation
        if (cardNumberInput.value.replace(/\s/g, '').length !== 16) {
            document.getElementById('cardNumberError').textContent = 'Please enter a valid 16-digit card number';
            isValid = false;
        }

        // Expiry validation
        const [month, year] = expiryInput.value.split('/');
        const now = new Date();
        const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
        if (!month || !year || expiry < now) {
            document.getElementById('expiryError').textContent = 'Please enter a valid expiry date';
            isValid = false;
        }

        // CVV validation
        if (!/^\d{3}$/.test(cvvInput.value)) {
            document.getElementById('cvvError').textContent = 'Please enter a valid 3-digit CVV';
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate payment processing
            Swal.fire({
                title: 'Processing Payment',
                text: 'Please wait...',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            }).then(() => {
                // Show success message
                Swal.fire({
                    title: 'Payment Successful!',
                    html: `
                        <div class="booking-confirmation">
                            <p>Your payment has been processed successfully.</p>
                            <p>Booking reference: AUTOLUXE-${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                            <p>A confirmation email has been sent to ${sessionStorage.getItem('userEmail')}</p>
                            <p>Pickup Location: ${pickupLocation}</p>
                        </div>
                    `,
                    icon: 'success',
                    confirmButtonText: 'Done'
                }).then(() => {
                    // Clear session and redirect to home
                    sessionStorage.clear();
                    window.location.href = 'index.html';
                });
            });
        }
    });

    // Initialize booking summary
    updateBookingSummary();
});