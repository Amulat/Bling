const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Form Menu

function updatePrice() {
    var select = document.getElementById("Room-Type");
    var price = document.getElementById("price");
    if (select.value == "Standard") {
      price.innerHTML = "$90 per night";
      window.cost = 90;
    } else if (select.value == "Full") {
      price.innerHTML = "$125 per night";
      window.cost = 125;
    } else if (select.value == "Deluxe") {
      price.innerHTML = "$150 per night";
      window.cost = 150;
    } else if (select.value == "0") {
        price.innerHTML = "";
    }
}
  

//Booking form
function calculateTotalCost() {
    // Get the check-in and check-out dates from the form

    const form = document.getElementById("myForm");

    const checkInInput = checkIn.value;
    const checkOutInput = checkOut.value;

    const checkInDate = new Date(checkInInput);
    const checkOutDate = new Date(checkOutInput);
    

    const diff = Math.abs(checkInDate.getTime() - checkOutDate.getTime());  // Calculate the difference in milliseconds
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));  // Convert the difference to days and round up
    const totalCost = cost * nights; //nights;  // Calculate the total cost
    
    document.getElementById("total-cost").innerHTML = `$${totalCost}`;
}

//Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  duration: 1,
  opacity: 1,
  y: -150,
  stagger: 0.3
})