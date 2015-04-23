;(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  $doc.ready(function() {
    var vurl = $('#vimeo').attr('src');

    $('.line').each(function() {
        var outerThis = $(this);
      $(this).waypoint(function() {
        outerThis.addClass('scrolled-to');
      }, {
        offset: '75%'
      });

    })
    //starts the first gif, then starts subsequent after each one ends
    $('#first-gif').waypoint(function() {
      $('#first-gif').attr('src', 'img/icon01_FULL.gif')
      .delay(5000).queue(function(next) {
        $('#second-gif').attr('src', 'img/icon02_FULL.gif');
        $('.progress').toggleClass( 'second-step');
        $('#progress-circle').toggleClass('second-step');
        next();
      }).delay(300).queue(function(next) {
        $('.second a').css('background', '#5B9DD7');
        next();
      }).delay(7500).queue(function(next) {
        $('#third-gif').attr('src', 'img/icon03_FULL.gif');
        $('.progress').toggleClass( 'third-step');
        $('#progress-circle').toggleClass('third-step');
        next();
      }).delay(300).queue(function(next) {
        $('.third a').css('background', '#5B9DD7');
        next();
      }).delay(5000).queue(function(next) {
        $('.progress').toggleClass( 'finished');
      });
    }, {
      offset: '75%'
    });

    //show the chart bars in the Why Carzell section
    $('#dollar-bars').waypoint(function() {
      $('#dollar-bars').addClass('loaded');
    }, {
      offset: '50%'
    });
    $('#carzell-time-bar').waypoint(function() {
      $('#carzell-time-bar').addClass('loaded');
    }, {
      offset: '75%'
    });
    $('#private-time-bar').waypoint(function() {
      $('#private-time-bar').addClass('loaded');
    }, {
      offset: '75%'
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
      $('#video_overlay').addClass('video-playing');
    });
    
    $('#video_overlay').click(function(){
      $('#vimeo').attr('src','');
      $('#video_overlay').removeClass('video-playing');
      $('#video_overlay').hide();
    });
    
    $("body").keydown(function(e) {
      e.keyCode; // this value
      if(e.keyCode == 27){
        $('#vimeo').attr('src','');
        $('#video_overlay').removeClass('video-playing');
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
