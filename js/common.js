$('.slider').slick({
    dots:true ,
    infinite: false,
    speed: 300,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,

});

function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();