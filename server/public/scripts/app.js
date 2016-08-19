$(function(){
     // See if this is a touch device
     if ('ontouchstart' in window)
     {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');

        // Add the touch toggle to show text
        $('div.boxInner img').click(function(){
           $(this).closest('.boxInner').toggleClass('touchFocus');
        });
     }

     if($('.dev.red').is(':visible') && $('.des.red').is(':visible')) {
       $('.message').fadetoggle();
    }

     $('.title').on('mouseover', function() {
       $('.title').hide();
       $('.hovertitle').fadeIn();
     });

     $('.close').on('click', function() {
       $(this).parent().fadeOut();
     });

     $('.design').on('click', function() {
       $('.dev').toggle();
       $('.design').toggleClass('red');
     });

     $('.development').on('click', function() {
       $('.des').toggle();
       $('.development').toggleClass('red');
     });

     $('.about').on('click', function() {
       $('.aboutMe').fadeIn();
       $('.about').toggleClass('red');
     });

     $('.bandanaJoe').on('click', function() {
       $('.bandanaJoeInfo').fadeIn();
     });

     $('.raisable').on('click', function() {
       $('.raisableInfo').fadeIn();
     });


  });
