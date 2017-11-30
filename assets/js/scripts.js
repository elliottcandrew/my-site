var sticky1Height = $('#sticky1');
var sticky2Height = $('#sticky2');
var sticky3Height = $('#sticky3');
var viewportHeight = $(window).height();
var resizeListener; /* variable that will hold a reference to setTimeout() function */
var pause = 500; /* the amount of time to wait after the resizing has finished before calling our function */

// var sticky1Offset = viewportHeight - sticky1Height.height()

$(document).ready(function() {

  // wraps each word in a span for alternating alignment
  $(".title-wrap").lettering('words');

  //STICKY COLUMNS

  // set initial stick point + 12px for bottom-margin
  if ((viewportHeight - sticky1Height.height()) < 102 /* 90 + 12 */){
    $('#sticky1').css({ top: (viewportHeight - sticky1Height.height()) - 12 }); /* set top css as difference between div height and viewport height */
  } else {
    $('#sticky1').css({ top: 60 });
  }

  if ((viewportHeight - sticky2Height.height()) < 102){
    $('#sticky2').css({ top: (viewportHeight - sticky2Height.height()) - 12 });
  } else {
    $('#sticky2').css({ top: 60 });
  }

  if ((viewportHeight - sticky3Height.height()) < 102){
    $('#sticky3').css({ top: (viewportHeight - sticky3Height.height()) - 12 });
  } else {
    $('#sticky3').css({ top: 60 });
  }

  $(window).resize(function(){
    clearTimeout(resizeListener); /* every time the window resize is called cancel the setTimeout() function */

    resizeListener = setTimeout(function(){
      if ((viewportHeight - sticky1Height.height()) < 102){
        $('#sticky1').css({ top: (viewportHeight - sticky1Height.height()) - 12 }); /* set top css as difference between div height and viewport height */
      } else {
        $('#sticky1').css({ top: 60 });
      }

      if ((viewportHeight - sticky2Height.height()) < 102){
        $('#sticky2').css({ top: (viewportHeight - sticky2Height.height()) - 12 });
      } else {
        $('#sticky2').css({ top: 60 });
      }

      if ((viewportHeight - sticky3Height.height()) < 102){
        $('#sticky3').css({ top: (viewportHeight - sticky3Height.height()) - 12 });
      } else {
        $('#sticky3').css({ top: 60 });
      }
    }, pause);
  });


});
