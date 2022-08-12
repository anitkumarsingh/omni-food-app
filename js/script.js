const yearEle = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEle.textContent = currentYear;

// Mobile menu working
const mobileMenu = document.querySelector('.btn-mobile-nav');
const headerEle = document.querySelector('.header');

mobileMenu.addEventListener('click', function () {
	headerEle.classList.toggle('nav-open');
});

// ======= Smooth scroll into section
const allLink = document.querySelectorAll('a:link');
allLink.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		// get attribute name
		const href = link.getAttribute('href');
		// scroll back to top
		if (href === '#') {
			scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
		// scroll to section
		if (href !== '#' && href.startsWith('#')) {
			const sectionEle = document.querySelector(href);
			sectionEle.scrollIntoView({ behavior: 'smooth' });
		}
		// closing mobile menu
		if (link.classList.contains('nav-main-link')) {
			headerEle.classList.toggle('nav-open');
		}
	});
});

// ======= Sticky navigation ========
const sectionHeroEle = document.querySelector('.hero-section');
const obs = new IntersectionObserver(function (entries) {
const ent = entries[0]
if(!ent.isIntersecting){
  document.body.classList.add('sticky');
}else{
  document.body.classList.remove('sticky');
}
}, {
  // in view port
	root: null,
	threshold: 0,
  // height of sticky header in px
  rootMargin:'-80px'
});
obs.observe(sectionHeroEle);
