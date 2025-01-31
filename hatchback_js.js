// Car data
const carData = {
    Maruti: [
        {
            name: "Baleno",
            price: "₹6,61,000 - ₹9,88,000",
            image: "image/Baleno.jpg",
            specs: {
                engine: "1.2L DualJet Petrol",
                mileage: "22-24 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "WagonR",
            price: "₹5,53,000 - ₹7,41,000",
            image: "image/WagonR.jpg",
            specs: {
                engine: "1.0L/1.2L Petrol",
                mileage: "21-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Celerio",
            price: "₹5,37,000 - ₹7,15,000",
            image: "image/Celerio.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "24-26 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Alto K10",
            price: "₹3,99,000 - ₹5,95,000",
            image: "image/Alto K10.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "22-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Ignis",
            price: "₹5,82,000 - ₹8,14,000",
            image: "image/Ignis.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "20-22 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        }
    ],
    Hyundai: [
        {
            name: "i20",
            price: "₹7,45,000 - ₹11,88,000",
            image: "image/i20.jpg",
            specs: {
                engine: "1.0L Turbo/1.2L Petrol",
                mileage: "20-22 kmpl",
                transmission: "Manual/Automatic",
                type: "Hatchback"
            }
        },
        {
            name: "Grand i10 Nios",
            price: "₹5,69,000 - ₹8,47,000",
            image: "image/Grand i10 Nios.jpg",
            specs: {
                engine: "1.2L Petrol/1.2L Diesel",
                mileage: "18-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Santro",
            price: "₹4,76,000 - ₹6,44,000",
            image: "image/Santro.jpg",
            specs: {
                engine: "1.1L Petrol",
                mileage: "20-21 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Eon",
            price: "₹3,32,000 - ₹4,45,000",
            image: "image/Eon.jpg",
            specs: {
                engine: "0.8L Petrol",
                mileage: "20-21 kmpl",
                transmission: "Manual",
                type: "Hatchback"
            }
        },
        {
            name: "Creta",
            price: "₹10,87,000 - ₹19,20,000",
            image: "image/Creta.jpg",
            specs: {
                engine: "1.5L Petrol/1.5L Diesel",
                mileage: "16-21 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV"
            }
        },
        {
            name: "Alcazar",
            price: "₹16,88,000 - ₹21,00,000",
            image: "image/Alcazar.jpg",
            specs: {
                engine: "1.5L Petrol/1.5L Diesel",
                mileage: "15-20 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV"
            }
        }
    ],
    "Tata": [
        {
            name: "Altroz",
            price: "₹6,60,000 - ₹10,25,000",
            image: "image/Altroz1.jpg",
            specs: {
                engine: "1.2L Petrol/1.5L Diesel",
                mileage: "18-23 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Tiago",
            price: "₹5,59,000 - ₹8,19,000",
            image: "image/Tiago.1jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "20-23 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Punch",
            price: "₹6,00,000 - ₹9,52,000",
            image: "image/Punch.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "18-20 kmpl",
                transmission: "Manual/AMT",
                type: "Micro SUV"
            }
        }
    ],
    Honda: [
        {
            name: "Jazz",
            price: "₹8,05,000 - ₹10,05,000",
            image: "image/Jazz.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "16-18 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "WR-V",
            price: "₹8,76,000 - ₹12,10,000",
            image: "image/WR-V.jpg",
            specs: {
                engine: "1.2L Petrol/1.5L Diesel",
                mileage: "16-22 kmpl",
                transmission: "Manual",
                type: "Compact SUV"
            }
        },
        {
            name: "Brio",
            price: "₹4,73,000 - ₹6,82,000",
            image: "image/Brio.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "16-19 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        }
    ],
    Renault: [
        {
            name: "Kwid",
            price: "₹4,70,000 - ₹6,33,000",
            image: "image/Kwid.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "22-25 kmpl",
                transmission: "Manual/AMT",
                type: "Hatchback"
            }
        },
        {
            name: "Triber",
            price: "₹6,33,000 - ₹8,96,000",
            image: "image/Triber.jpg",
            specs: {
                engine: "1.0L Petrol",
                mileage: "18-20 kmpl",
                transmission: "Manual/AMT",
                type: "Compact MPV"
            }
        }
    ],
    Kia: [
        {
            name: "Sonet",
            price: "₹8,19,000 - ₹13,69,000",
            image: "image/Sone.jpg",
            specs: {
                engine: "1.0L Turbo/1.5L Diesel",
                mileage: "18-21 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV"
            }
        },
        {
            name: "Seltos",
            price: "₹10,89,000 - ₹19,99,000",
            image: "image/Seltos.jpg",
            specs: {
                engine: "1.5L Petrol/1.5L Diesel",
                mileage: "16-20 kmpl",
                transmission: "Manual/Automatic",
                type: "Compact SUV"
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