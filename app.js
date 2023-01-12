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

    window.costtotal = totalCost

    document.getElementById("total-cost").innerHTML = `$${totalCost}`;
}

//cookies

const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  Cookies.set('name', costtotal);
});

function DisplayPrice() {
  var price = Cookies.get('name')
  document. querySelector("price_price").innerHTML = `$${price}`;
}












//Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  duration: 1,
  opacity: 1,
  y: -150,
  stagger: 0.3
})

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.5,
  opacity: 1,
  x: -150,
  stagger: 0.12
})

gsap.from('.animate-img', {
  scrollTrigger: '.animate-services',
  duration: 1.2,
  opacity: 0,
  x: -200,
})

gsap.from('.animate-room', {
  scrollTrigger: '.animate-room',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5
})

gsap.from('.animate-card', {
  scrollTrigger: '.animate-room',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.5,
  delay: 0.2
})

gsap.from('.animate-amenities', {
  scrollTrigger: '.animate-amenities',
  duration: 1.5,
  opacity: 1,
  x: 150,
  stagger: 0.48
})
