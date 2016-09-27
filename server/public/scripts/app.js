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




     $('.title').on('mouseover', function() {
       $('.title').hide();
       $('.hovertitle').fadeIn();
     });

     $('.close').on('click', function() {
       $(this).parent().fadeOut();
     });

     $('.close.aboutx').on('click', function() {
        $('.about').toggleClass('red');
     });

     $('.close.gitx').on('click', function() {
        $('.git').toggleClass('red');
     });

     $('.design').on('click', function() {
       $('.dev').toggle();
       $('.photos').toggle();
       $('.design').toggleClass('red');
       $('.desMessage').toggle();
       $('.development').toggle();
       $('.photo').toggle();
       $('.about').toggle();
       $('.git').toggle();
       $('.x').toggle();
     });

     $('.development').on('click', function() {
       $('.des').toggle();
       $('.photos').toggle();
       $('.development').toggleClass('red');
       $('.devMessage').toggle();
       $('.design').toggle();
       $('.photo').toggle();
       $('.about').toggle();
       $('.git').toggle();
       $('.x').toggle();

     });

     $('.photo').on('click', function() {
       $('.des').toggle();
       $('.dev').toggle();
       $('.photo').toggleClass('red');
       $('.photoMessage').toggle();
       $('.development').toggle();
       $('.design').toggle();
       $('.about').toggle();
       $('.git').toggle();
       $('.x').toggle();

     });

     $('.about').on('click', function() {
       $('.aboutMe').fadeIn();
       $('.about').addClass('red');
     });

     $('.git').on('click', function() {
       $('.gitMe').fadeIn();
       $('.git').addClass('red');
     });

     $('.bandanaJoe').on('click', function() {
       $('.bandanaJoeInfo').fadeIn();
     });

     $('.raisable').on('click', function() {
       $('.raisableInfo').fadeIn();
     });

     $('.streamix').on('click', function() {
       $('.streamixInfo').fadeIn();
     });

     $('.nsg').on('click', function() {
       $('.nsgInfo').fadeIn();
     });

     $('.calc').on('click', function() {
       $('.calcInfo').fadeIn();
     });

     $('.honey').on('click', function() {
       $('.honeyInfo').fadeIn();
     });

     $('.spfa').on('click', function() {
       $('.spfaInfo').fadeIn();
     });

     $('.hf').on('click', function() {
       $('.hfInfo').fadeIn();
     });

     $('.usps').on('click', function() {
       $('.uspsInfo').fadeIn();
     });

     $('.kmb').on('click', function() {
       $('.kmbInfo').fadeIn();
     });

     $('.blue').on('click', function() {
       $('.blueInfo').fadeIn();
     });

     $('.kick').on('click', function() {
       $('.kickInfo').fadeIn();
     });


  });
