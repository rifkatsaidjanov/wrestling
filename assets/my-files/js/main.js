                                // NAVBAR FIXED
(function () {


var elNavbarFixed = document.querySelector(".navbar");

    // bu scroll bo'ganda brauzerni qiynamaslik uchun kod
var debounce = function (func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// scroll 200 
var onWindowScroll = function(){
  if (window.scrollY > 50) {
      elNavbarFixed.classList.add("navbar-fixed")
      document.body.style.marginTop = elNavbar.offsetHeight + "px"
  }else{
        document.body.style.marginTop = "0"
        elNavbarFixed.classList.remove("navbar-fixed")
    }
}

document.addEventListener("scroll", debounce(onWindowScroll, 10))


                                // carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    // items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        600:{
            items:2,
        },
        768:{
            items:3,
        },
        1000:{
            items:4
        },
        1300:{
            items:5
        }
    }
});



                  // YOZUV AVTOMATIK YOZILISH ANIMATSIYZSI
 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};
                                
                                // AOS
// AOS.init();

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
// aos bir ^ marta ishlashi uchun 
      mirror: false
    });
  }
    window.addEventListener('load', () => {
    aos_init();
  });
                            

                            // counter

$('.counter').counterUp({
    delay: 5,
    time: 2000,

});


})();


                                    // siteStellar

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  };
  siteStellar();