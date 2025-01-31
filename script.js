const menu = document.querySelector('.menu_list');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click',function(){
    menu.classList.toggle('active');
});

const Navbar =document.querySelector('.navbar');

window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        Navbar.classList.add('sticky');
    }
    else{
        Navbar.classList.add('sticky');
    }
})

var swiper = new Swiper('.Myswiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});



var swiper = new Swiper('.Categories_Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});



var swiper = new Swiper('.Tst_Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});


var swiper = new Swiper('.Blog_Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});


document.getElementById("searchButton").addEventListener("click", function() {
    const vehicleType = document.getElementById("vehicleType").value;
    const pickupLocation = document.getElementById("pickupLocation").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;

    // Validate all fields
    if (!vehicleType) {
        alert("Please fill out all the fields before proceeding!");
        return;
    }

    if (!pickupLocation) {
        alert("Please select a pickup location.");
        return;
    }
    if (!pickupDate) {
        alert("Please select a pickup date.");
        return;
    }
    if (!returnDate) {
        alert("Please select a return date.");
        return;
    }

    const now = new Date(); // Current date and time
    console.log(now);

    // Convert pickupDate and returnDate to Date objects
    const pickupDateObj = new Date(pickupDate);
    const returnDateObj = new Date(returnDate);

    // Validation: Pickup date-time should not be in the past
    if (pickupDateObj < now) {
        alert("Pickup date cannot be in the past. Please select a valid date.");
        return;
    }

    // Validation: Return date-time should not be earlier than today
    if (returnDateObj < now) {
        alert("Return date cannot be earlier than today's date and Pickup Date. Please select a valid return date.");
        return;
    }

    // Validation: Return date-time should be strictly after pickup date-time
    if (returnDateObj <= pickupDateObj) {
        alert("Return date must be after the pickup date. Please select a valid return date.");
        return;
    }

    // If all fields are valid, redirect to the selected page
    window.location.href = vehicleType;
});
