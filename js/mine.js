// for navbar acive 

$(document).ready(function () {
  
    $(".one").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });

    $("nav .nav-item .nav-link").click(function (){
        $('nav .nav-item .nav-link.active').removeClass('active');
        $(this).addClass('active');

    });









    // for Testimonials slider
    var carousel = $(".test-container .carousel"),
    currdeg  = 0;

    $(".next-test").on("click", { d: "n" }, rotate);
    $(".prev-test").on("click", { d: "p" }, rotate);

    function rotate(e){
    if(e.data.d=="n"){
      currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
      currdeg = currdeg + 60;
    }
    carousel.css({
      "-webkit-transform": "rotateY("+currdeg+"deg)",
      "-moz-transform": "rotateY("+currdeg+"deg)",
      "-o-transform": "rotateY("+currdeg+"deg)",
      "transform": "rotateY("+currdeg+"deg)"
    });









}











// for fancy slider video
$("#show-video").click(function (){

  

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
    
  });
  
  
  
  new Fancybox(
    // Array containing gallery items
    [
      // Gallery item
      {
        src: "img/show-videos/Building The Ultimate Photography Portfolio - Dani Diamond.mp4",
        thumb: "img/show-videos/Building The Ultimate Photography Portfolio - Dani Diamond.mp4",
      },
   
    ],
    // Gallery options
    {
      hideScrollbar: false,
    }
  );


});



























// for counting
(function ($) {
  $.fn.count = function(options) {
      var $this = $(this);
      var settings = $.extend({
          startValue: 0,
          endValue: 300,
          durationValue: 4000
      }, options);
      $this.html(settings.startValue).attr('data-count', settings.endValue);
      var countTo = $this.attr('data-count');
      $({ countNum: $this.html()}).animate({
          countNum: countTo
      },
      {
          duration: settings.durationValue,
          easing:'swing',
          step: function() {
              $this.text(Math.floor(this.countNum));
          },
          complete: function() {
              $this.text(this.countNum);
              console.log('done.');
          }
      });
      return this;
  }
}( jQuery ));

$(".numbering .row .col-md-6:nth-child(1) .count").count({
  startValue: 0,
  endValue: 360,
durationValue: 90000
});
$(".numbering .row .col-md-6:nth-child(2) .count").count({
  startValue: 0,
  endValue: 120,
  durationValue: 90000
});
$(".numbering .row .col-md-6:nth-child(3) .count").count({
  startValue: 0,
  endValue: 650,
  durationValue: 90000
});
$(".numbering .row .col-md-6:nth-child(4) .count").count({
  startValue: 0,
  endValue: 250,
  durationValue: 90000
});














// for arrow up

let secTop=$("#Home").offset().top
$(window).scroll(function(){

let windowTop=$(window).scrollTop()
if(windowTop>secTop)
{
    $(".arrow-up").fadeIn(1000)
}
else
{
    $(".arrow-up").fadeOut(1000)
}


});









// for mouse move
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();






  });




























  // for slick slider
  $(document).ready(function(){

    


    $('.center').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,



      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });



    $(window).scroll(function () {
      console.log("hi")
    })



  });



