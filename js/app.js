// $(document).ready(function(){
// $('.slider').slick({
//   arrows:false,
//   dots:true,
//   appendDots:'.slider-dots',
//   dotsClass:'dots',
// });


// let hamberger=document.querySelector('.hamberger');
// let times=document.querySelector('.times');
// let mobileNav=document.querySelector('.mobile-nav');

// hamberger.addEventListener('click',function(){
//   mobileNav.classList.add('open');
// });

// times.addEventListener('click',function(){
//   mobileNav.classList.remove('open');
// });

// });
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots',
  });

  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  // Open mobile menu
  hamberger.addEventListener('click', function() {
    mobileNav.classList.add('open');
  });

  // Close mobile menu
  times.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });

  // Close mobile menu when clicking on a menu item
  // Select all the mobile nav links
  let navLinks = document.querySelectorAll('.mobile-nav a');

  // Add event listener to each link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('open');
    });
  });
});

