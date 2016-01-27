(function($) {
  $(function () {
  	// call starfield fron page
	$('.starfield').starfield({
        starDensity: 0.3,
        mouseScale: 0.3
    });

	// main menu
	var menu = $('#block-system-main-menu a');
	menu.wrapInner('<div class="front-menu-link"></div>');

	// main links with quates
	$(function(){
	
		var link = $('.main-link'),T1,T2;
		
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
				
		function rndDiv2(){
			var posX1 = (Math.random() * ($(window).width() - link.width())).toFixed();
			var posY1 = (Math.random() * ($(window).height() - link.height())).toFixed();
			link.css({
				'left':posX1+'px',
				'top':posY1+'px'
			});
			var random1 = Math.floor(Math.random() * link.length);
			link.eq(random1).fadeIn(2000).delay(1000).fadeOut(2000);
		}

		function timing1(){
			T1 = setTimeout(function(){
				rndDiv1();
				timing1();
			},2500);
		}timing1();

		function timing2(){
			T2 = setTimeout(function(){
				rndDiv2();
				timing2();
			},5000);
		}timing2();
		
		console.log('hey there');
	});
  });
})(jQuery);
