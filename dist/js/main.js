;(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  $doc.ready(function() {
    var vurl = $('#vimeo').attr('src');

    //animate the lines under each section title when scrolled to
    $('.line').each(function() {
        var outerThis = $(this);
      $(this).waypoint(function() {
        outerThis.addClass('scrolled-to');
      }, {
        offset: '75%'
      });
    });

    var progressBarAnimation = function() {
      $('#first-gif').waypoint(function(direction) {
        $('.first span').css('background', '#5B9DD7')
        .delay(5000).queue(function(next) {
          $('.progress').toggleClass( 'second-step');
          $('#progress-circle').toggleClass('second-step');
          next();
        }).delay(300).queue(function(next) {
          $('.second span').css('background', '#5B9DD7');
          next();
        }).delay(7500).queue(function(next) {
          $('.progress').toggleClass( 'third-step');
          $('#progress-circle').toggleClass('third-step');
          next();
        }).delay(300).queue(function(next) {
          $('.third span').css('background', '#5B9DD7');
          next();
        }).delay(5000).queue(function(next) {
          $('.progress').toggleClass( 'finished');
        });
        this.destroy();
      }, {
        offset: '75%'
      });
    }

    //GIFs trigger in succession on downward scroll to section
    var gifAnimation = function() {
        //helper functions that clear the timeout delayed second and third GIFs when the first is re-triggered via the waypoint
        var second;
        function startSecond() {
          window.clearTimeout(second);
          second = window.setTimeout(function() {
            $('#second-gif').attr('src', 'img/icon02_FULL.gif');
          }, 5000)
        }
        var third;
        function startThird() {
          window.clearTimeout(third);
          third = window.setTimeout(function() {
            $('#third-gif').attr('src', 'img/icon03_FULL.gif');
          }, 12500)
        }
        $('#first-gif').waypoint(function(direction) {
          if (direction === 'down') {
            $('#first-gif').attr('src', 'img/icon01_FULL.gif');
            startSecond();
            startThird();
            $('#second-gif').attr('src', 'img/Icon02_START.png');
            $('#third-gif').attr('src', 'img/Icon03_START.png');
          }
        }, {
        offset: '75%'
        });
        $('#first-gif').waypoint(function(direction) {
          if (direction === 'up') {
            $('#first-gif').attr('src', 'img/icon01_FULL.gif');
            startSecond();
            startThird();
            $('#second-gif').attr('src', 'img/Icon02_START.png');
            $('#third-gif').attr('src', 'img/Icon03_START.png');
          }
        }, {
        offset: '5%'
        });
    }


    //mobile 'how it works' each trigger on scroll
    var mobileGifAnimation = function() {
      $('#first-gif').waypoint(function() {
        $('#first-gif').attr('src', 'img/icon01_FULL.gif')
      }, {
        offset: '75%'
      });
      $('#second-gif').waypoint(function() {
        $('#second-gif').attr('src', 'img/icon02_FULL.gif')
      }, {
        offset: '75%'
      });
      $('#third-gif').waypoint(function() {
        $('#third-gif').attr('src', 'img/icon03_FULL.gif')
      }, {
        offset: '75%',
      });
    }

    //regular how it works animation vs. mobile
    if ($(window).width() > 767) {
      progressBarAnimation();
      gifAnimation();
    } else {
      mobileGifAnimation();
    }

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
    
    //recently sold slider
    $('.bxslider').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 250,
      slideMargin: 25,
      autoControls: true,
      responsive: true
    });
    
    //video overlay
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
