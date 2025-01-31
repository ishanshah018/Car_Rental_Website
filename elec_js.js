// Car data
const carData = {
    Tata: [
        {
            name: "Tata Nexon EV",
            price: "₹14,49,000 - ₹19,54,000",
            image: "image/Tata Nexon EV.jpg",
            specs: {
                battery: "30.2 kWh/40.5 kWh",
                range: "312 - 453 km (ARAI)",
                charging: "Fast Charging (80% in 60 min)",
                type: "SUV"
            }
        },
        {
            name: "Tata Tiago EV",
            price: "₹8,69,000 - ₹12,04,000",
            image: "image/Tata Tiago EV.jpg",
            specs: {
                battery: "19.2 kWh/24 kWh",
                range: "250 - 315 km (ARAI)",
                charging: "Fast Charging (80% in 57 min)",
                type: "Hatchback"
            }
        },
        {
            name: "Tata Tigor EV",
            price: "₹12,49,000 - ₹13,75,000",
            image: "image/Tata Tigor EV.jpg",
            specs: {
                battery: "26 kWh",
                range: "306 km (ARAI)",
                charging: "Fast Charging (80% in 65 min)",
                type: "Sedan"
            }
        }
    ],
    Mahindra: [
        {
            name: "Mahindra XUV400",
            price: "₹15,99,000 - ₹19,39,000",
            image: "image/Mahindra XUV400.jpg",
            specs: {
                battery: "34.5 kWh/39.4 kWh",
                range: "375 - 456 km (ARAI)",
                charging: "Fast Charging (80% in 50 min)",
                type: "SUV"
            }
        },
        {
            name: "Mahindra eVerito",
            price: "₹10,15,000 - ₹11,50,000",
            image: "image/Mahindra eVerito.jpg",
            specs: {
                battery: "21.2 kWh",
                range: "140 km (ARAI)",
                charging: "Fast Charging (80% in 90 min)",
                type: "Sedan"
            }
        }
    ],
    MG: [
        {
            name: "MG ZS EV",
            price: "₹22,98,000 - ₹27,00,000",
            image: "image/MG ZS EV.jpg",
            specs: {
                battery: "50.3 kWh",
                range: "461 km (ARAI)",
                charging: "Fast Charging (80% in 60 min)",
                type: "SUV"
            }
        }
    ],
    Hyundai: [
        {
            name: "Hyundai Kona Electric",
            price: "₹23,84,000 - ₹24,03,000",
            image: "image/Hyundai Kona Electric.jpg",
            specs: {
                battery: "39.2 kWh",
                range: "452 km (ARAI)",
                charging: "Fast Charging (80% in 57 min)",
                type: "SUV"
            }
        },
        {
            name: "Hyundai Ioniq 5",
            price: "₹44,95,000",
            image: "image/Hyundai Ioniq 5.jpg",
            specs: {
                battery: "72.6 kWh",
                range: "631 km (ARAI)",
                charging: "Ultra-Fast Charging (80% in 18 min)",
                type: "SUV"
            }
        }
    ],
    BYD: [
        {
            name: "BYD Atto 3",
            price: "₹33,99,000",
            image: "image/BYD Atto 3.jpg",
            specs: {
                battery: "60.48 kWh",
                range: "521 km (ARAI)",
                charging: "Fast Charging (80% in 50 min)",
                type: "SUV"
            }
        }
    ],
    Mercedes: [
        {
            name: "Mercedes-Benz EQB",
            price: "₹74,50,000",
            image: "image/Mercedes-Benz EQB.jpg",
            specs: {
                battery: "66.5 kWh",
                range: "423 km (WLTP)",
                charging: "Fast Charging (80% in 32 min)",
                type: "Luxury SUV"
            }
        },
        {
            name: "Mercedes-Benz EQS",
            price: "₹1,55,00,000 - ₹2,45,00,000",
            image: "image/Mercedes-Benz EQS.jpg",
            specs: {
                battery: "107.8 kWh",
                range: "857 km (WLTP)",
                charging: "Ultra-Fast Charging (80% in 31 min)",
                type: "Luxury Sedan"
            }
        }
    ],
    BMW: [
        {
            name: "BMW iX",
            price: "₹1,21,00,000",
            image: "image/BMW iX.jpg",
            specs: {
                battery: "76.6 kWh",
                range: "425 km (WLTP)",
                charging: "Fast Charging (80% in 35 min)",
                type: "Luxury SUV"
            }
        },
        {
            name: "BMW i4",
            price: "₹73,90,000",
            image: "image/BMW i4.jpg",
            specs: {
                battery: "83.9 kWh",
                range: "590 km (WLTP)",
                charging: "Fast Charging (80% in 31 min)",
                type: "Luxury Sedan"
            }
        }
    ],
    Audi: [
        {
            name: "Audi e-tron",
            price: "₹1,01,00,000 - ₹1,19,00,000",
            image: "image/Audi e-tron.jpg",
            specs: {
                battery: "95 kWh",
                range: "484 km (WLTP)",
                charging: "Fast Charging (80% in 30 min)",
                type: "Luxury SUV"
            }
        },
        {
            name: "Audi Q8 e-tron",
            price: "₹1,14,00,000",
            image: "image/Audi Q8 e-tron.jpg",
            specs: {
                battery: "106 kWh",
                range: "600 km (WLTP)",
                charging: "Fast Charging (80% in 31 min)",
                type: "Luxury SUV"
            }
        }
    ],

    Kia: [
        {
            name: "Kia EV6",
            price: "₹60,95,000 - ₹65,95,000",
            image: "image/Kia EV6.jpg",
            specs: {
                battery: "77.4 kWh",
                range: "528 km (WLTP)",
                charging: "Ultra-Fast Charging (80% in 18 min)",
                type: "Luxury SUV"
            }
        },
        {
            name: "Kia Niro EV",
            price: "₹45,00,000 (Estimated)",
            image: "image/Kia Niro EV.jpg",
            specs: {
                battery: "64.8 kWh",
                range: "463 km (WLTP)",
                charging: "Fast Charging (80% in 45 min)",
                type: "SUV"
            }
        },
        {
            name: "Kia Soul EV",
            price: "₹40,00,000 (Estimated)",
            image: "image/Kia Soul EV.jpg",
            specs: {
                battery: "64 kWh",
                range: "452 km (WLTP)",
                charging: "Fast Charging (80% in 54 min)",
                type: "Compact SUV"
            }
        }
    ],
};


// Function to create car cards
function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    
    card.innerHTML = `
        <div class="price-container">
            <span class="car-price">${car.price}</span>
        </div>
        <div class="car-image">
            <img src="${car.image}" alt="${car.name}">
        </div>
        <div class="car-info">
            <h3 class="car-name">${car.name}</h3>
            <div class="car-specs">
                <div class="car-spec-item">
                    <i class="fas fa-car"></i>
                    <span>${car.specs.type}</span>
                </div>
                <div class="car-spec-item">
                    <i class="fas fa-gas-pump"></i>
                    <span>${car.specs.engine}</span>
                </div>
                <div class="car-spec-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>${car.specs.mileage}</span>
                </div>
                <div class="car-spec-item">
                    <i class="fas fa-cog"></i>
                    <span>${car.specs.transmission}</span>
                </div>
            </div>
            <button class="view-details-btn">
                <i class="fas fa-eye"></i> View Details
            </button>
        </div>
    `;
    
    // Add ripple effect to view details button
    const viewDetailsBtn = card.querySelector('.view-details-btn');
    viewDetailsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        
        // Set ripple position
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Remove ripple after animation
        ripple.addEventListener('animationend', () => {
            ripple.remove();
            showCarDetails(car);
        });
    });

    return card;
}

// Function to show car details in modal
function showCarDetails(car) {
    const modal = document.getElementById('carModal');
    const modalContent = modal.querySelector('.modal-content');
    const modalDetails = modal.querySelector('.car-details');
    
    modalDetails.innerHTML = `
        <div class="modal-header">
            <h2 class="car-title">${car.name}</h2>
            <div class="car-price-tag">${car.price}</div>
            <div class="price-close">
                <span class="close-tooltip">Click to close</span>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="car-details-table">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Vehicle Specifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-car"></i> Type
                            </td>
                            <td class="spec-value">${car.specs.type}</td>
                        </tr>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-gas-pump"></i> Engine
                            </td>
                            <td class="spec-value">${car.specs.engine}</td>
                        </tr>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-tachometer-alt"></i> Mileage
                            </td>
                            <td class="spec-value">${car.specs.mileage}</td>
                        </tr>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-cog"></i> Transmission
                            </td>
                            <td class="spec-value">${car.specs.transmission}</td>
                        </tr>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-calendar"></i> Year
                            </td>
                            <td class="spec-value">${car.specs.year || '2023'}</td>
                        </tr>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-palette"></i> Color
                            </td>
                            <td class="spec-value">${car.specs.color || 'Black'}</td>
                        </tr>
                        <tr>
                            <td class="spec-label">
                                <i class="fas fa-road"></i> Condition
                            </td>
                            <td class="spec-value">${car.specs.condition || 'New'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="modal-car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
        </div>
        
        <div class="modal-footer">
            <button class="book-now-btn">
                <i class="fas fa-calendar-check"></i> Book Now
            </button>
        </div>
    `;
    
    // Add event listener for book now button
    modalDetails.querySelector('.book-now-btn').addEventListener('click', () => {
        alert('Thank you for your interest! Our team will contact you shortly for booking.');
    });
    
    // Show modal with animation
    modal.style.display = 'block';
    modal.classList.add('modal-show');
    modalContent.classList.add('modal-content-show');
    
    // Add close button event listener
    const closeBtn = modalDetails.querySelector('.price-close');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('carModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add closing animations
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hide');
    modalContent.classList.remove('modal-content-show');
    modalContent.classList.add('modal-content-hide');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('modal-hide');
        modalContent.classList.remove('modal-content-hide');
    }, 300);
}

// Load all cars initially when the page loads
window.addEventListener('DOMContentLoaded', () => {
    displayAllCars();
});

// Function to display all cars
function displayAllCars() {
    const carsContainer = document.getElementById('carsContainer');
    carsContainer.innerHTML = ''; // Clear current display
    
    // Loop through all companies and their cars
    Object.values(carData).forEach(companyCars => {
        companyCars.forEach(car => {
            carsContainer.appendChild(createCarCard(car));
        });
    });
}

// Add event listener for company filter
document.getElementById('companyFilter').addEventListener('change', function(e) {
    const selectedCompany = e.target.value;
    const carsContainer = document.getElementById('carsContainer');
    
    // Clear current cars
    carsContainer.innerHTML = '';
    
    // Add fade-out effect
    carsContainer.style.opacity = '0';
    carsContainer.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        if (selectedCompany === 'all') {
            displayAllCars();
        } else {
            // Show selected company cars
            const companyCars = carData[selectedCompany] || [];
            companyCars.forEach(car => {
                carsContainer.appendChild(createCarCard(car));
            });
        }
        
        // Add fade-in effect
        carsContainer.style.opacity = '1';
    }, 300);
});

// Prevent filter from closing immediately on hover
document.getElementById('companyFilter').addEventListener('mouseover', function(e) {
    this.focus();
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializePreviewSlider();
});