(function($) {
  $(function () {

	var menuLink = $('#block-system-main-menu li');

  	// call starfield front page
  	$(function(){
  		if($('body').hasClass('front')){
  			$('.starfield').starfield({
        		starDensity: 0.3,
       			mouseScale: 0.3
    		});
  		}
  	});

	// main menu
	$(function () {
		menuLink.find('a').wrapInner('<div class="front-menu-link"></div>');
		if($('body').hasClass('page-node-8')){
			menuLink.eq(0).removeClass('first').hide();
			menuLink.eq(1).addClass('first');
		}else if ($('body').hasClass('page-node-7')) {
			menuLink.eq(2).removeClass('last').hide();
			menuLink.eq(1).addClass('last');
		}
	});

	// main links with quates
	$(function(){
	
		var link = $('.main-link'),T1;
		
		$(link).each(function() {
			var src = $('a', this).attr('href');
			$(this).find('.field-content').wrap('<a href="'+src+'" target="_blank"></a>');
			$('.link-url', this).hide();
		});
		
		function rndDiv1(){
			var posX = (Math.random() * ($(window).width() - link.width())).toFixed();
			var posY = (Math.random() * ($(window).height() - link.height())).toFixed();
			link.css({
				'left':posX+'px',
				'top':posY+'px'
			});
			var random = Math.floor(Math.random() * link.length);
			link.eq(random).fadeIn(1000).delay(500).fadeOut(1000);
		}
				
		// function rndDiv2(){
		// 	var posX1 = (Math.random() * ($(window).width() - link.width())).toFixed();
		// 	var posY1 = (Math.random() * ($(window).height() - link.height())).toFixed();
		// 	link.css({
		// 		'left':posX1+'px',
		// 		'top':posY1+'px'
		// 	});
		// 	var random1 = Math.floor(Math.random() * link.length);
		// 	link.eq(random1).fadeIn(2000).delay(1000).fadeOut(2000);
		// }

		function timing1(){
			T1 = setTimeout(function(){
				rndDiv1();
				timing1();
			},2500);
		}timing1();

		// function timing2(){
		// 	T2 = setTimeout(function(){
		// 		rndDiv2();
		// 		timing2();
		// 	},5000);
		// }timing2();
		
		console.log('hey there');
	});

	// $(function(){
	// 	$(window).resize(function() {
	// 		var cornerH = parseFloat($('.main_image img').outerHeight());
	// 		var cornerW = parseFloat($('.main_image img').outerWidth());
	// 		var thumb_height = parseFloat(main_height / 3);
	// 		$('.thumb').outerHeight(thumb_height);
	// 	}).trigger('resize');
	// });

  });
})(jQuery);
