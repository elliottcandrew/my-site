var sticky1Height = $('#sticky1');
var sticky2Height = $('#sticky2');
var viewportHeight = $(window).height();
var resizeListener; /* variable that will hold a reference to setTimeout() function */
var pause = 500; /* the amount of time to wait after the resizing has finished before calling our function */
var homeMargins = 0;

// colour cycle
var counter = 0;
var colors = [
  "#ecf6e0",
  "#f8e8eb",
  "#ecf0f5",
  "#e9e6e1"
];

$(document).ready(function() {

  $(".title-wrap").lettering('words'); /* wraps each word in a span for alternating alignment*/

  // SLIDE-OUT MENUS + hide tab while menu shows
  $('.tab-left, .close-1').on('click', function() {
    $('.menu1, .tab-left').toggleClass('clicked');
    return false;
  });

  $('html').on('click', function() {
    $('.menu1, .tab-left').removeClass('clicked');
  });

  // TOUCH MENU
  $('.touch-toggle, .close-touch').on('click', function(){
    $('.menu-touch').toggleClass('clicked');
    $('body, html').toggleClass('noscroll');
  });

  // CYCLE THROUGH BODY COLOURS ON CARD HOVER
  $(".card-home").mouseenter(function() {
    $("html").css("background", colors[(counter++)%colors.length]);
  });

  //CURRENT PAGE INDICATION
  var pathname = (window.location.pathname);

  $('.header-nav li a').each(function() {
    if ($(this).attr("href") == pathname) {
      $(this).addClass('current');
    }
  });

});
