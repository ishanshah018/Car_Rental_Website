// Car data
const carData = {
    Toyota: [
        {
            name: "Fortuner",
            price: "₹45,00,000",
            image: "image/fortuner.jpg",
            specs: {
                engine: "2.8L Diesel",
                mileage: "10-15 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Land Cruiser 300",
            price: "₹2,10,00,000",
            image: "image/Land Cruiser 300.jpg",
            specs: {
                engine: "3.3L V6 Diesel",
                mileage: "10 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Urban Cruiser Hyryder",
            price: "₹15,00,000",
            image: "image/Urban Cruiser Hyryder.jpg",
            specs: {
                engine: "1.5L Petrol",
                mileage: "27 kmpl (Hybrid)",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Taisor",
            price: "₹12,00,000",
            image: "image/Taisor.jpg",
            specs: {
                engine: "1.2L Turbo Petrol",
                mileage: "18 kmpl",
                transmission: "Manual/AMT",
                type: "SUV"
            }
        },
        {
            name: "Fortuner Legender",
            price: "₹50,00,000",
            image: "image/Fortuner Legender.jpg",
            specs: {
                engine: "2.8L Diesel",
                mileage: "14 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        }
    ],

    Ford: [
        {
            name: "Endeavour",
            price: "₹36,00,000",
            image: "image/Endeavour.jpg",
            specs: {
                engine: "2.0L Diesel",
                mileage: "12 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "2025 Explorer",
            price: "₹40,00,000",
            image: "image/2025 Explorer.jpg",
            specs: {
                engine: "2.3L Turbo Petrol",
                mileage: "10 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "EcoSport",
            price: "₹8,00,000",
            image: "image/EcoSport.jpg",
            specs: {
                engine: "1.5L Petrol",
                mileage: "17 kmpl",
                transmission: "Manual/AMT",
                type: "SUV"
            }
        },
        {
            name: "Escape",
            price: "₹28,00,000",
            image: "image/Escape.jpg",
            specs: {
                engine: "2.5L Hybrid",
                mileage: "18 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        }
    ],

    Kia: [
        {
            name: "Carens",
            price: "₹11,00,000",
            image: "image/Carens.jpg",
            specs: {
                engine: "1.5L Diesel/Petrol",
                mileage: "16-21 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Carnival",
            price: "₹30,00,000",
            image: "image/Carnival.jpg",
            specs: {
                engine: "2.2L Diesel",
                mileage: "13 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Syros",
            price: "₹25,00,000",
            image: "image/Syros.jpg",
            specs: {
                engine: "1.6L Turbo Petrol",
                mileage: "18 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        }
    ],

    Tata: [
        {
            name: "Curvv",
            price: "₹20,00,000",
            image: "image/Curvv.jpg",
            specs: {
                engine: "Electric",
                mileage: "400 km (Range)",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Harrier",
            price: "₹15,00,000",
            image: "image/Harrier.jpg",
            specs: {
                engine: "2.0L Diesel",
                mileage: "16 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Safari",
            price: "₹20,00,000",
            image: "image/Safari.jpg",
            specs: {
                engine: "2.0L Diesel",
                mileage: "14-16 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        }
    ],

    Mahindra: [
        {
            name: "XUV-700",
            price: "₹14,00,000",
            image: "image/XUV-700.jpg",
            specs: {
                engine: "2.0L Petrol/2.2L Diesel",
                mileage: "15-20 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Scorpio-N",
            price: "₹13,00,000",
            image: "image/Scorpio-N.jpg",
            specs: {
                engine: "2.2L Diesel",
                mileage: "15 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Bolero",
            price: "₹9,50,000",
            image: "image/Bolero.jpg",
            specs: {
                engine: "1.5L Diesel",
                mileage: "16 kmpl",
                transmission: "Manual",
                type: "SUV"
            }
        },
        {
            name: "Thar-4by4",
            price: "₹10,00,000",
            image: "image/Thar-4by4.jpg",
            specs: {
                engine: "2.0L Petrol/2.2L Diesel",
                mileage: "10 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Thar ROXX",
            price: "₹11,50,000",
            image: "image/Thar ROXX.jpg",
            specs: {
                engine: "2.2L Diesel",
                mileage: "10 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "Scorpio-classic",
            price: "₹13,00,000",
            image: "image/Scorpio-classic.jpg",
            specs: {
                engine: "2.2L Diesel",
                mileage: "15 kmpl",
                transmission: "Manual",
                type: "SUV"
            }
        },
        {
            name: "XUV 3XO",
            price: "₹8,00,000",
            image: "image/XUV 3XO.jpg",
            specs: {
                engine: "1.2L Petrol",
                mileage: "17 kmpl",
                transmission: "Manual/AMT",
                type: "SUV"
            }
        },
        {
            name: "Marazzo",
            price: "₹13,00,000",
            image: "image/Marazzo.jpg",
            specs: {
                engine: "1.5L Diesel",
                mileage: "17 kmpl",
                transmission: "Manual",
                type: "SUV"
            }
        }
    ],

    Audi: [
        {
            name: "Audi Q3",
            price: "₹44,00,000",
            image: "image/Audi Q3.jpg",
            specs: {
                engine: "2.0L Petrol",
                mileage: "14 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Audi Q5",
            price: "₹60,00,000",
            image: "image/Audi Q5.jpg",
            specs: {
                engine: "2.0L Petrol",
                mileage: "12 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Audi Q7",
            price: "₹82,00,000",
            image: "image/Audi Q7.jpg",
            specs: {
                engine: "3.0L Diesel",
                mileage: "9 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Audi Q8",
            price: "₹1,00,00,000",
            image: "image/Audi Q8.jpg",
            specs: {
                engine: "3.0L Petrol",
                mileage: "8 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Audi RS-Q8",
            price: "₹2,00,00,000",
            image: "image/Audi RS-Q8.jpg",
            specs: {
                engine: "4.0L Twin-Turbo V8",
                mileage: "7 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        }
    ],

    Mercedes: [
        {
            name: "Mercedes-Benz GLA",
            price: "₹44,90,000",
            image: "image/Mercedes-Benz GLA.jpg",
            specs: {
                engine: "1.3L Petrol",
                mileage: "16 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Mercedes-Benz GLS",
            price: "₹1,21,00,000",
            image: "image/Mercedes-Benz GLS.jpg",
            specs: {
                engine: "3.0L Diesel",
                mileage: "9 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Mercedes-Benz Maybach GLS",
            price: "₹2,70,00,000",
            image: "image/Mercedes-Benz Maybach GLS.jpg",
            specs: {
                engine: "4.0L V8 Petrol",
                mileage: "7 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "Mercedes-Benz GLE",
            price: "₹88,00,000",
            image: "image/Mercedes-Benz GLE.jpg",
            specs: {
                engine: "2.0L Diesel",
                mileage: "10 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        }
    ],

    MG: [
        {
            name: "MG HECTOR",
            price: "₹15,00,000",
            image: "image/MG HECTOR.jpg",
            specs: {
                engine: "1.5L Turbo Petrol/2.0L Diesel",
                mileage: "14-17 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "MG ASTOR",
            price: "₹10,00,000",
            image: "image/MG ASTOR.jpg",
            specs: {
                engine: "1.3L Turbo Petrol",
                mileage: "15 kmpl",
                transmission: "Automatic",
                type: "SUV"
            }
        },
        {
            name: "MG HECTOR PLUS",
            price: "₹18,00,000",
            image: "image/MG HECTOR PLUS.jpg",
            specs: {
                engine: "1.5L Turbo Petrol/2.0L Diesel",
                mileage: "12-16 kmpl",
                transmission: "Manual/Auto",
                type: "SUV"
            }
        },
        {
            name: "MG GLOSTER",
            price: "₹38,00,000",
            image: "image/MG GLOSTER.jpg",
            specs: {
                engine: "2.0L Twin Turbo Diesel",
                mileage: "13 kmpl",
                transmission: "Automatic",
                type: "SUV"
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