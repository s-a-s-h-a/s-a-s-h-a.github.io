$(document).ready(function() {

	"use strict";

  /* =================================
   SUPERSLIDES                
   =================================== */
   $('#slides').superslides({
    play: 5000
   })

  /* =================================
    PARALLAX               
    ==================================== */
    $('.jarallax').jarallax({
    	speed: 0.5,
    	imgWidth: 1366,
    	imgHeight: 768
    })

  /* =================================
  LIGHTGALLERY             
  ==================================== */
  $(document).ready(function(){
    $('#lightgallery').lightGallery({
    	thumbnail: false,
    	download: false,
    	autoplay: false,
    	autoplayControls: false,
    	zoom: false,
    	fullScreen: false,
    	pager: false
    });
  });

  /* =================================
  header            
  ==================================== */

  var $head = $( '#ha-header' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
    animClassDown = $el.data( 'animateDown' ),
    animClassUp = $el.data( 'animateUp' );

    $el.waypoint( function( direction ) {
    	if( direction === 'down' && animClassDown ) {
    		$head.attr('class', 'ha-header ' + animClassDown);
    	}
    	else if( direction === 'up' && animClassUp ){
    		$head.attr('class', 'ha-header ' + animClassUp);
    		}
    }, { offset: '100%' } );
  } );

  /* =================================
  Smooth scroll           
  ==================================== */
    $('body').smoothScroll({
      delegateSelector: 'ul.mainnav a'
    });

    $('p.subnav a').click(function(event) {
      event.preventDefault();
      var link = this;
      $.smoothScroll({
        scrollTarget: link.hash
      });
    });

    $('#change-speed').bind('click', function() {
      var $p1 = $('ul.mainnav a').first();
      var p1Opts = $p1.smoothScroll('options') || {};

      p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
      $p1.smoothScroll('options', p1Opts);
    });

    $('button.scrollsomething').bind('click', function(event) {
      event.preventDefault();
       $.smoothScroll({
         scrollElement: $('div.scrollme'),
        scrollTarget: '#findme'
      });
    });
    $('button.scrollhorz').bind('click', function(event) {
      event.preventDefault();
      $.smoothScroll({
        direction: 'left',
        scrollElement: $('div.scrollme'),
        scrollTarget: '.horiz'
      });

  });

  /* =================================
  animate      
  ==================================== */
  var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
  }
  $('.aniview').AniView(options);

}); // End $(document).ready Function






















