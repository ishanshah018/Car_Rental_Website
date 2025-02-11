// Car data
const carData = {
    MarutiSuzuki: [
        {
            name: "Ciaz",
            price: "₹3,000/day",
            image: "image/ciaz.jpg",
            specs: {
                engine: "1.5L VVT",
                mileage: "20 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Swift Dzire",
            price: "₹2,500/day",
            image: "image/swift.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "24 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
    ],
    
    Hyundai: [
        {
            name: "Verna",
            price: "₹9.20 - 15.70 Lakh",
            image: "image/verna.jpg",
            specs: {
                engine: "1.5L Petrol/Diesel",
                mileage: "16-21 kmpl",
                transmission: "Manual/Auto",
                type: "Sedan"
            }
        },
        {
            name: "Aura",
            price: "₹5.98 - 8.78 Lakh",
            image: "image/aura.jpg",
            specs: {
                engine: "1.2L Kappa/1.5L U2",
                mileage: "19-24 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Elantra",
            price: "₹13.99 - 18.59 Lakh",
            image: "image/elantra.jpg",
            specs: {
                engine: "2.0L Petrol",
                mileage: "16 kmpl",
                transmission: "CVT/Manual",
                type: "Sedan"
            }
        },
        {
            name: "Verna Turbo",
            price: "₹10.75 - 14.25 Lakh",
            image: "image/vernaTurbo.jpg",
            specs: {
                engine: "1.0L Turbo GDi",
                mileage: "17-20 kmpl",
                transmission: "Manual/DCT",
                type: "Sedan"
            }
        }
    ],
    Honda: [
        {
            name: "City",
            price: "₹11.57 - 15.52 Lakh",
            image: "image/city.jpg",
            specs: {
                engine: "1.5L i-VTEC",
                mileage: "18.4 kmpl",
                transmission: "Manual/CVT",
                type: "Sedan"
            }
        },
        {
            name: "Amaze",
            price: "₹7.16 - 9.92 Lakh",
            image: "image/amaze.jpg",
            specs: {
                engine: "1.2L i-VTEC",
                mileage: "18.6 kmpl",
                transmission: "Manual/CVT",
                type: "Sedan"
            }
        },
        {
            name: "Accord Hybrid",
            price: "₹37.18 - 39.98 Lakh",
            image: "image/accordHybrid.jpg",
            specs: {
                engine: "2.0L i-MMD",
                mileage: "23-25 kmpl",
                transmission: "e-CVT",
                type: "Sedan"
            }
        },
        {
            name: "Civic",
            price: "₹17.93 - 23.73 Lakh",
            image: "image/civic.jpg",
            specs: {
                engine: "1.8L i-VTEC",
                mileage: "16 kmpl",
                transmission: "Manual/CVT",
                type: "Sedan"
            }
        }
    ],

    Volkswagen: [
        {
            name: "Volkswagen Virtus",
            price: "₹11.00 - 17.60 Lakh",
            image: "image/VolkswagenVirtus.jpg",
            specs: {
                engine: "1.0L TSI",
                mileage: "18.5 kmpl",
                transmission: "Manual/DSG",
                type: "Sedan",
                features: ["Digital Cockpit", "Panoramic Sunroof", "Adaptive Cruise Control"]
            }
        },
        {
            name: "Volkswagen Passat",
            price: "₹30.00 - 38.00 Lakh",
            image: "image/VolkswagenPassat.jpg",
            specs: {
                engine: "2.0L TDI",
                mileage: "18 kmpl",
                transmission: "DSG Automatic",
                type: "Sedan",
                features: ["Nappa Leather Seats", "360-degree Camera", "Autonomous Driving Assistance"]
            }
        },
        {
            name: "Volkswagen Ameo",
            price: "₹6.00 - 9.50 Lakh",
            image: "image/VolkswagenAmeo.jpg",
            specs: {
                engine: "1.2L TSI",
                mileage: "17.83 kmpl",
                transmission: "Manual/Automatic",
                type: "Sedan",
                features: ["Touchscreen Infotainment", "Rear Parking Sensors", "LED Headlights"]
            }
        },
        {
            name: "Volkswagen Jetta",
            price: "₹17.00 - 22.00 Lakh",
            image: "image/VolkswagenJetta.jpg",
            specs: {
                engine: "2.0L TDI",
                mileage: "16.6 kmpl",
                transmission: "Manual/DSG",
                type: "Sedan",
                features: ["Dual-zone Climate Control", "Cruise Control", "6.5-inch Display"]
            }
        },
        {
            name: "Volkswagen Vento",
            price: "₹8.00 - 14.00 Lakh",
            image: "image/VolkswagenVento.jpg",
            specs: {
                engine: "1.6L MPI",
                mileage: "16.93 kmpl",
                transmission: "Manual/Automatic",
                type: "Sedan",
                features: ["Leather Upholstery", "Touchscreen Display", "Parking Sensors"]
            }
        },
        {
            name: "Volkswagen Polo Sedan",
            price: "₹7.20 - 10.50 Lakh",
            image: "image/VolkswagenPoloSedan.jpg",
            specs: {
                engine: "1.0L MPI",
                mileage: "19.5 kmpl",
                transmission: "Manual",
                type: "Sedan",
                features: ["Bluetooth Connectivity", "Automatic Headlights", "Rear Armrest"]
            }
        },
        {
            name: "Volkswagen Touareg",
            price: "₹70.00 - 85.00 Lakh",
            image: "image/VolkswagenTouareg.jpg",
            specs: {
                engine: "3.0L V6 TDI",
                mileage: "12.5 kmpl",
                transmission: "8-Speed Automatic",
                type: "Sedan",
                features: ["LED Matrix Lights", "Heated Seats", "Surround Sound System"]
            }
        },
        {
            name: "Volkswagen Santana",
            price: "₹14.50 - 19.00 Lakh",
            image: "image/VolkswagenSantana.jpg",
            specs: {
                engine: "1.4L TSI",
                mileage: "14.6 kmpl",
                transmission: "Manual/DSG",
                type: "Sedan",
                features: ["Advanced Infotainment", "Sunroof", "Lane Keep Assist"]
            }
        },
        {
            name: "Volkswagen Tiguan",
            price: "₹28.00 - 35.00 Lakh",
            image: "image/VolkswagenTiguan.jpg",
            specs: {
                engine: "2.0L TDI",
                mileage: "16.0 kmpl",
                transmission: "DSG Automatic",
                type: "Sedan",
                features: ["Panoramic Sunroof", "Power Steering", "Voice Control"]
            }
        },
        {
            name: "Volkswagen Bora",
            price: "₹22.00 - 26.00 Lakh",
            image: "image/VolkswagenBora.jpg",
            specs: {
                engine: "1.9L TDI",
                mileage: "17.2 kmpl",
                transmission: "Manual/Automatic",
                type: "Sedan",
                features: ["Front and Rear Parking Sensors", "Bi-Xenon Headlights", "Bluetooth Connectivity"]
            }
        }
    ],

    Skoda: [
        {
            name: "Skoda Slavia",
            price: "₹3,000/day",
            image: "image/SkodaSlavia.jpg",
            specs: {
                engine: "1.5L VVT",
                mileage: "20 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Skoda Octavia",
            price: "₹2,500/day",
            image: "image/SkodaOctavia.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "24 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Skoda Superb",
            price: "₹2800/day",
            image: "image/SkodaSuperb.jpg",
            specs: {
                engine: "1.0L Turbo",
                mileage: "21 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Skoda Rapid",
            price: "₹5.20 - 7.90 Lakh",
            image: "image/SkodaRapid.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "22 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Skoda Laura",
            price: "₹5.20 - 7.90 Lakh",
            image: "image/SkodaLaura.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "22 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Skoda Octavia RS iV",
            price: "₹5.20 - 7.90 Lakh",
            image: "image/Skoda Octavia RS iV.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "22 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
    ],
    Audi: [
        {
            name: "Audi A4",
            price: "₹3,000/day",
            image: "image/Audi A4.jpg",
            specs: {
                engine: "1.5L VVT",
                mileage: "20 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Audi A6",
            price: "₹2,500/day",
            image: "image/Audi A6.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "24 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Audi A8",
            price: "₹2800/day",
            image: "image/Audi A8.jpg",
            specs: {
                engine: "1.0L Turbo",
                mileage: "21 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Audi S5 Sportback",
            price: "₹5.20 - 7.90 Lakh",
            image: "image/Audi S5 Sportback.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "22 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Audi RS7 Sportback",
            price: "₹5.20 - 7.90 Lakh",
            image: "image/Audi RS7 Sportback.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "22 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
        {
            name: "Audi A5",
            price: "₹5.20 - 7.90 Lakh",
            image: "image/Audi A5.jpg",
            specs: {
                engine: "1.2L VVT",
                mileage: "22 kmpl",
                transmission: "Manual/AMT",
                type: "Sedan"
            }
        },
    ],

    Mercedes: [
        {
        name: "Mercedes-Benz C-Class",
        price: "₹3,000/day",
        image: "image/Mercedes-Benz C-Class.jpg",
        specs: {
            engine: "2.0L Inline-4 Turbo",
            mileage: "16.9 kmpl",
            transmission: "Automatic",
            type: "Sedan"
        }
    },
    {
        name: "Mercedes-Benz E-Class",
        price: "₹80,000/day",
        image: "image/Mercedes-Benz E-Class.jpg",
        specs: {
            engine: "2.0L Diesel/3.0L Petrol",
            mileage: "16.1 kmpl",
            transmission: "Automatic",
            type: "Sedan"
        }
    },
    {
        name: "Mercedes-Benz S-Class",
        price: "₹1,50,000/day",
        image: "image/Mercedes-Benz S-Class.jpg",
        specs: {
            engine: "3.0L Inline-6 Turbo",
            mileage: "10.75 kmpl",
            transmission: "Automatic",
            type: "Sedan"
        }
    },
    {
        name: "Mercedes-Benz CLA",
        price: "₹40,000/day",
        image: "image/Mercedes-Benz CLA.jpg",
        specs: {
            engine: "1.3L Turbo Petrol",
            mileage: "15 kmpl",
            transmission: "Automatic",
            type: "Sedan"
        }
    },
    {
        name: "Mercedes-Benz A-Class Limousine",
        price: "₹50,000/day",
        image: "image/Mercedes-Benz A-Class Limousine.jpg",
        specs: {
            engine: "1.3L Turbo Petrol",
            mileage: "17.5 kmpl",
            transmission: "Automatic",
            type: "Sedan"
        }
    },
    {
        name: "Mercedes-Benz EQS",
        price: "₹2,50,000/day",
        image: "image/Mercedes-Benz EQS.jpg",
        specs: {
            engine: "Electric Motor",
            mileage: "857 km/charge",
            transmission: "Automatic",
            type: "Electric Sedan"
        }
    }
    ],


    BMW: [

            {
                name: "BMW 3 Series",
                price: "₹4,000/day",
                image: "image/BMW 3 Series.jpg",
                specs: {
                    engine: "2.0L Inline-4 Turbo",
                    mileage: "16.13 kmpl",
                    transmission: "Automatic",
                    type: "Sedan"
                }
            },
            {
                name: "BMW 5 Series",
                price: "₹90,000/day",
                image: "image/BMW 5 Series.jpg",
                specs: {
                    engine: "2.0L Diesel/3.0L Petrol",
                    mileage: "17.42 kmpl",
                    transmission: "Automatic",
                    type: "Sedan"
                }
            },
            {
                name: "BMW 7 Series",
                price: "₹2,00,000/day",
                image: "image/BMW 7 Series.jpg",
                specs: {
                    engine: "3.0L Inline-6 Turbo",
                    mileage: "11.86 kmpl",
                    transmission: "Automatic",
                    type: "Sedan"
                }
            },
            {
                name: "BMW M5",
                price: "₹1,50,000/day",
                image: "image/BMW M5.jpg",
                specs: {
                    engine: "4.4L V8",
                    mileage: "9.12 kmpl",
                    transmission: "Automatic",
                    type: "Sedan"
                }
            },
            {
                name: "BMW 6 Series Gran Turismo",
                price: "₹1,20,000/day",
                image: "image/BMW 6 Series Gran Turismo.jpg",
                specs: {
                    engine: "2.0L Inline-4 Diesel",
                    mileage: "18.65 kmpl",
                    transmission: "Automatic",
                    type: "Sedan"
                }
            },
            {
                name: "BMW i7",
                price: "₹3,00,000/day",
                image: "image/BMW i7.jpg",
                specs: {
                    engine: "Electric Motor",
                    mileage: "625 km/charge",
                    transmission: "Automatic",
                    type: "Electric Sedan"
                }
            },
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


