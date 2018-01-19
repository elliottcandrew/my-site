var sticky1Height = $('#sticky1');
var sticky2Height = $('#sticky2');
var viewportHeight = $(window).height();
var resizeListener; /* variable that will hold a reference to setTimeout() function */
var pause = 500; /* the amount of time to wait after the resizing has finished before calling our function */
var homeMargins = 0;

$(document).ready(function() {

  // wraps each word in a span for alternating alignment
  $(".title-wrap").lettering('words');

  //STICKY COLUMNS

  // set initial stick point + bottom-margin
  $('#sticky1').css({ top: (viewportHeight - sticky1Height.height()) - homeMargins });
  $('#sticky2').css({ top: (viewportHeight - sticky2Height.height()) - homeMargins });

  $(window).resize(function(){
    clearTimeout(resizeListener); /* every time the window resize is called cancel the setTimeout() function */

    resizeListener = setTimeout(function(){
      $('#sticky1').css({ top: (viewportHeight - sticky1Height.height()) - homeMargins }); /* set top css as difference between div height and viewport height */
      $('#sticky2').css({ top: (viewportHeight - sticky2Height.height()) - homeMargins });
    }, pause);
  });

  // SLIDE-OUT MENUS + hide tab while menu shows

  $('.tab-left').on('click', function(){
    $('.menu1').toggleClass('clicked');
    $('.tab-left').toggleClass('clicked');
  });

  $('.close-1').on('click', function(){
    $('.menu1').toggleClass('clicked');
    $('.tab-left').toggleClass('clicked');
  });

  $('.tab-right').on('click', function(){
    $('.menu2').toggleClass('clicked');
    $('.tab-right').toggleClass('clicked');
  });

  $('.close-2').on('click', function(){
    $('.menu2').toggleClass('clicked');
    $('.tab-right').toggleClass('clicked');
  });

  // TOUCH MENU

  $('.nav-toggle').on('click', function(){
    $('.menu-touch').toggleClass('clicked');
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

  $('.close-touch').on('click', function(){
    $('.menu-touch').toggleClass('clicked');
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

  $('#touch-prof').on('click', function(){
    // alternate visible column
    $('.col2').addClass('hide');
    $('.col1').removeClass('hide');
    // hide title-home and avatar, switch col-titles
    $('.title-home').addClass('hide');
    $('.avatar').addClass('hide');
    $('.title-prof').addClass('show');
    $('.title-pers').removeClass('show');
    // close menu and toggle base scroll
    $('.menu-touch').toggleClass('clicked');
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

  $('#touch-pers').on('click', function(){
    // alternate visible column
    $('.col1').addClass('hide');
    $('.col2').removeClass('hide');
    // hide title-home and avatar, switch col-titles
    $('.title-home').addClass('hide');
    $('.avatar').addClass('hide');
    $('.title-pers').addClass('show');
    $('.title-prof').removeClass('show');
    // close menu and toggle base scroll
    $('.menu-touch').toggleClass('clicked');
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

});
