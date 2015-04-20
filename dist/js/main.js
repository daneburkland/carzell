;(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  $doc.ready(function() {
    var vurl = $('#vimeo').attr('src');


    $('.bxslider').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 250,
      slideMargin: 10,
      autoControls: true,
      responsive: true
    });
    
    $('#video').click(function(e){
      e.preventDefault();
      $('#vimeo').attr('src', vurl);
      $('#video_overlay').fadeIn();
      $('#video_overlay').addClass('vol');
    });
    
    $('#video_overlay').click(function(){
      $('#vimeo').attr('src','');
      $('#video_overlay').removeClass('vol');
      $('#video_overlay').hide();
    });
    
    $("body").keydown(function(e) {
      e.keyCode; // this value
      if(e.keyCode == 27){
        $('#vimeo').attr('src','');
        $('#video_overlay').removeClass('vol');
        $('#video_overlay').hide();
      }
    });
  
    $('#sellerMoreInfo').click(function(e){
      e.preventDefault();
      $("html, body").animate({ scrollTop: 1300}, 600);
    });
  
    // navigation
    $('.menu').on('click', function(e){
      $(this).parent().toggleClass('opened');

      e.preventDefault();
    });

    // circles
    $('.circle-inner').on('mouseover touchstart', function(){
      $(this).parent().addClass('opened').siblings().removeClass('opened');
    })
    $('.tooltip').on('mouseout', function(){
      $('.circle').removeClass('opened');
    })
  });




})(jQuery, window, document);
