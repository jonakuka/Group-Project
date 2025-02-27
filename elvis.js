
window.onscroll = function() { stickyNavbar(); toggleScrollTopButton(); };

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;
var scrollTopButton = document.querySelector('.scroll-to-top');

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}


function toggleScrollTopButton() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none"; 
  }
}


scrollTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const learnMoreButton = document.querySelector('.learn-more-btn');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-btn');


learnMoreButton.onclick = function() {
  modal.style.display = 'block';
  modal.classList.add('fade-in'); 
}


closeModalButton.onclick = function() {
  modal.style.display = 'none';
  modal.classList.remove('fade-in'); 
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    modal.classList.remove('fade-in'); 
  }
}

const progressBars = document.querySelectorAll('.skill .bar');

window.addEventListener('scroll', () => {
  progressBars.forEach(progressBar => {
    if (isElementInViewport(progressBar)) {
      const fill = progressBar.querySelector('.fill');
      fill.style.width = fill.dataset.skillLevel;
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - navbar.offsetHeight, 
      behavior: 'smooth'
    });
  });
});

AOS.init({
  once: true, 
  duration: 1000
});
