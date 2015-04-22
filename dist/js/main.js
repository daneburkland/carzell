;(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  $doc.ready(function() {
    var vurl = $('#vimeo').attr('src');
    $()


    $('.line').each(function() {
        var outerThis = $(this);
      $(this).waypoint(function() {
        outerThis.addClass('scrolled-to');
      }, {
        offset: '75%'
      });

    })

    $('#first-gif').waypoint(function() {
      $('#first-gif').attr('src', 'img/icon01_FULL.gif')
      .delay(5000).queue(function(next) {
        $('#second-gif').attr('src', 'img/icon02_FULL.gif');
        $('.progress').toggleClass( 'second-step');
        $('#progress-circle').toggleClass('second-step');
        next();
      }).delay(7500).queue(function(next) {
        $('#third-gif').attr('src', 'img/icon03_FULL.gif');
        $('.progress').toggleClass( 'third-step');
        $('#progress-circle').toggleClass('third-step');
        next();
      }).delay(5000).queue(function(next) {
        $('.progress').toggleClass( 'finished');
      });
    }, {
      offset: '75%'
    });

    $('#bars').waypoint(function() {
      $('#bars').addClass('loaded');
    }, {
      offset: '25%'
    });

    

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
