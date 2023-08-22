const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel-carousel-mobile-container').children;
const totalImages = images.length;
const button = document.querySelector('#button');
const form = document.querySelector('#form')
let index = 0;
const hamburger = document.querySelector(".mobile-nav-icon");
const navMenu = document.querySelector(".nav-menus");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("you are pressing me");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


//button alert
button.addEventListener('click', () => {
  alert("There is no more picture, moreover is not a real website")
})

form.addEventListener('click', () => {
  alert('oops!!! no database for the form')
})

prev.addEventListener('click', () => {
    nextImage('next');
  })
  
  next.addEventListener('click', () => {
    nextImage('prev');
  })
  
  function nextImage(direction) {
    if(direction == 'next') {
      index++;
      if(index == totalImages) {
        index = 0;
      }
    } else {
      if(index == 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }
  
    for(let i = 0; i < images.length; i++) {
      images[i].classList.remove('main');
    }
    images[index].classList.add('main');
  }