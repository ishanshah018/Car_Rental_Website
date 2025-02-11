// Car data
const carData = {
    Maruti: [
        {
            name: "Baleno",
            price: "₹2,500/Day",
            image: "image/Baleno.jpg",
            specs: {
                engine: "1.2L DualJet Petrol",
                mileage: "22-24 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Blue"
            }
        },
        {
            name: "WagonR",
            price: "₹1,500/Day",
            image: "image/WagonR.jpg",
            specs: {
                engine: "1.0L/1.2L Petrol",
                mileage: "21-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Red"
            }
        },
        {
            name: "Celerio",
            price: "₹1,000/Day",
            image: "image/Celerio.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "24-26 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Blue"
            }
        },
        {
            name: "Alto K10",
            price: "₹900/Day",
            image: "image/Alto K10.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "22-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Red"
            }
        },
        {
            name: "Ignis",
            price: "₹1,950/Day",
            image: "image/Ignis.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "20-22 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Blue"
            }
        }
    ],
    Hyundai: [
        {
            name: "i20",
            price: "₹2,700/Day",
            image: "image/i20.jpg",
            specs: {
                engine: "1.0L Turbo/1.2L Petrol",
                mileage: "20-22 kmpl",
                transmission: "Manual/Automatic",
                type: "Hatchback",
                color:"Red"
            }
        },
        {
            name: "Grand i10 Nios",
            price: "₹2,200/Day",
            image: "image/Grand i10 Nios.jpg",
            specs: {
                engine: "1.2L Petrol/1.2L Diesel",
                mileage: "18-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Red"
            }
        },
        {
            name: "Santro",
            price: "₹1,800/Day",
            image: "image/Santro.jpg",
            specs: {
                engine: "1.1L Petrol",
                mileage: "20-21 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"White"
            }
        },
        {
            name: "Eon",
            price: "₹1,500/Day",
            image: "image/Eon.jpg",
            specs: {
                engine: "0.8L Petrol",
                mileage: "20-21 kmpl",
                transmission: "Manual",
                type: "Hatchback",
                color:"Red"
            }
        },
        {
            name: "Creta",
            price: "₹3,500/Day",
            image: "image/Creta.jpg",
            specs: {
                engine: "1.5L Petrol/1.5L Diesel",
                mileage: "16-21 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV",
                color:"Black"
            }
        },
        {
            name: "Alcazar",
            price: "₹4,500/Day",
            image: "image/Alcazar.jpg",
            specs: {
                engine: "1.5L Petrol/1.5L Diesel",
                mileage: "15-20 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV",
                color:"Green"
            }
        }
    ],
    Tata: [
        {
            name: "Altroz",
            price: "₹1000/Day",
            image: "image/Altroz1.jpg",
            specs: {
                engine: "1.2L Petrol/1.5L Diesel",
                mileage: "18-23 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Blue"
            }
        },
        {
            name: "Tiago",
            price: "₹900/Day",
            image: "image/Tiago.1jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "20-23 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Cyan"
            }
        },
        {
            name: "Punch",
            price: "₹1,200/Day",
            image: "image/Punch.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "18-20 kmpl",
                transmission: "Manual/AMT",
                type: "Micro SUV",
                color:"Blue"
            }
        }
    ],
    Honda: [
        {
            name: "Jazz",
            price: "₹800/Day",
            image: "image/Jazz.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "16-18 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Gray"
            }
        },
        {
            name: "WR-V",
            price: "₹1,200/Day",
            image: "image/WR-V.jpg",
            specs: {
                engine: "1.2L Petrol/1.5L Diesel",
                mileage: "16-22 kmpl",
                transmission: "Manual",
                type: "Compact SUV",
                color:"Red"
            }
        },
        {
            name: "Brio",
            price: "₹1,000/Day",
            image: "image/Brio.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "16-19 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"Yellow"
            }
        }
    ],
    Renault: [
        {
            name: "Kwid",
            price: "₹1,499/Day",
            image: "image/Kwid.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "22-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback",
                color:"White"
            }
        },
        {
            name: "Triber",
            price: "₹1,599/Day",
            image: "image/Triber.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "18-20 kmpl",
                transmission: "Manual/AMT",
                type: "Compact MPV",
                color:"Black"
            }
        }
    ],
    Kia: [
        {
            name: "Sonet",
            price: "₹2,500/Day",
            image: "image/Sone.jpg",
            specs: {
                engine: "1.0L Turbo/1.5L Diesel",
                mileage: "18-21 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV",
                color:"Red"
            }
        },
        {
            name: "Seltos",
            price: "₹3,000/Day",
            image: "image/Seltos.jpg",
            specs: {
                engine: "1.5L Petrol/1.5L Diesel",
                mileage: "16-20 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV",
                color:"Green"
            }
        }
    ]
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
        window.location.href = 'booking.html';
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

    // Modify the book now button click handler
    modalDetails.querySelector('.book-now-btn').addEventListener('click', () => {
        // Store car details in sessionStorage
        sessionStorage.setItem('selectedCar', JSON.stringify({
            name: car.name,
            price: car.price,
            specs: car.specs
        }));
        
        // Check if user is logged in
        if (sessionStorage.getItem('isLoggedIn')) {
            window.location.href = 'booking.html';
        } else {
            // Show login/signup options
            const loginSignupOptions = document.getElementById('loginSignupOptions');
            loginSignupOptions.classList.remove('hidden');
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