const yearEle = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEle.textContent = currentYear;

// Mobile menu working

const mobileMenu = document.querySelector('.btn-mobile-nav');
const headerEle = document.querySelector('.header');

mobileMenu.addEventListener('click',function(){
 headerEle.classList.toggle('nav-open');
})