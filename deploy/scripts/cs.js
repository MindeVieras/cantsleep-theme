(function($) {
  $(function () {

	var body = $('body'),
		login = $('#block-user-login'),
		siteName = $('#site-name'),
		menuLink = $('#block-system-main-menu li'),
		closeLink = $('<div class="go-back-close">x</div>');
		cart = $('.view-commerce-cart-form'),
		teaProduct = $('#block-views-products-tea-block .tea-product'),
		comments = $('#comments'),
		footer = $('footer');

  	// all pages code
  	$(function(){
  		// front page code
  		if(body.hasClass('front')){
  			// calling starfield plugin
  			$('.starfield').starfield({
        		starDensity: 0.3,
       			mouseScale: 0.3
    		});
  			// random links
			var frontLink = $('.main-link');
			
			$('.main-link:nth-child(3n+1)').addClass('link-part-one');
			$('.main-link:nth-child(3n+2)').addClass('link-part-two');
			$('.main-link:nth-child(3n)').addClass('link-part-three');

			$(frontLink).each(function() {
				var src = $('a', this).attr('href');
				$(this).find('.field-content').wrap('<a href="'+src+'" target="_blank"></a>');
				$('.link-url', this).hide();
			});

			var link1 = $('.link-part-one'),T1;
			var link2 = $('.link-part-two'),T2;
			var link3 = $('.link-part-three'),T3;
			
			function rndDiv1(){
				var posX = (Math.random() * ($(window).width() - link1.width())).toFixed();
				var posY = (Math.random() * ($(window).height() - link1.height())).toFixed();
				link1.css({
					'left':posX+'px',
					'top':posY+'px'
				});
				var random = Math.floor(Math.random() * link1.length);
				link1.eq(random).fadeIn(1000).delay(500).fadeOut(1000);
			}		
			function rndDiv2(){
				var posX = (Math.random() * ($(window).width() - link2.width())).toFixed();
				var posY = (Math.random() * ($(window).height() - link2.height())).toFixed();
				link2.css({
					'left':posX+'px',
					'top':posY+'px'
				});
				var random = Math.floor(Math.random() * link2.length);
				link2.eq(random).fadeIn(2000).delay(1500).fadeOut(1500);
			}		
			function rndDiv3(){
				var posX = (Math.random() * ($(window).width() - link3.width())).toFixed();
				var posY = (Math.random() * ($(window).height() - link3.height())).toFixed();
				link3.css({
					'left':posX+'px',
					'top':posY+'px'
				});
				var random = Math.floor(Math.random() * link3.length);
				link3.eq(random).fadeIn(3000).delay(5000).fadeOut(2000);
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

			function timing3(){
				T3 = setTimeout(function(){
					rndDiv3();
					timing3();
				},10000);
			}timing3();
			
			$(window).resize(function() {
				var windowW = $(window).width(),
					windowH = $(window).height(),
					siteNameW = siteName.outerWidth(),
					siteNameH = siteName.outerHeight();
				
				siteName.css({
					'position':'absolute',
					'top': (windowH/2)-(siteNameH/2)+'px',
					'left': (windowW/2)-(siteNameW/2)+'px',
					'font-size': windowW/15+'px'
				});
				console.log(windowW+'x'+windowH+'front page');
			}).trigger('resize');
	  	}
	  	// all tea products page
	  	else if (body.hasClass('page-node-8')){
	  		
			$(window).resize(function() {
				var windowW = $(window).width(),
					windowH = $(window).height();
	  			
	  			teaProduct.css({
	  				'height': windowH/2+'px',
	  				'width': windowH/2.5+'px',
	  				'font-size': windowH/18+'px',
	  				'background-size': windowH/2.1+'px '+windowH/2.6+'px',
	  				'margin': 0+'px '+windowH/35+'px'
	  			});
	  			
				console.log(windowW+'x'+windowH+'all teas');
			}).trigger('resize');
	  	}
	  	// tea product node page
	  	else if (body.hasClass('node-type-tea-product')){

	  		var commentsShow = $('<div class="comments-show">Comments: <span class="comment-count"></span></div>'),
				commentsHide = $('<div class="comments-hide">Hide comments</div>'),
				teaProductNode = $('.node-tea-product');

			closeLink.prependTo($(this).find('.container'));

			comments.hide();
			commentsShow.appendTo(teaProductNode);
			var commentCount = comments.find('.comment').length;
			comments.find('span.comment-count').text(commentCount);

			commentsShow.click(function(event){
				comments.show('puff');
				$('.container').css('overflow-y','scroll');
			});
			commentsHide.prependTo(comments);
			commentsHide.click(function(event){
				comments.hide();
				$('.container').css('overflow-y','hidden');
			});

			$(window).resize(function() {
				var windowW = $(window).width(),
					windowH = $(window).height(),
					containerH = $('.container').height(),
					image = teaProductNode.find('.field-name-field-image img');

	  			image.css({
	  				'height':containerH,
	  				'width':'auto'
	  			});
	  			
				console.log(windowW+'x'+windowH+'one tea'+commentCount);
			}).trigger('resize');
	  	}
  	});
	// main menu
	$(function () {
		menuLink.find('a').wrapInner('<div class="front-menu-link"></div>');
		if(body.hasClass('page-node-8')){
			menuLink.eq(0).removeClass('first').hide();
			menuLink.eq(1).addClass('first');
		}else if (body.hasClass('page-node-7')) {
			menuLink.eq(2).removeClass('last').hide();
			menuLink.eq(1).addClass('last');
		}else if (body.hasClass('page-cart')) {
			menuLink.eq(1).hide();
		}else if (body.hasClass('node-type-tea-product')) {
			menuLink.eq(1).hide();
		}
	});
	// login form
	$(function(){
		login.find('#edit-name').attr('placeholder','username');
		login.find('#edit-pass').attr('placeholder','password');
	});
	// go back close button X
	$(function(){
		closeLink.prependTo($('body.page-cart').find('.container'));
		closeLink.click(function(event){
			window.history.back();
		});
	});
	// shoping cart
	$(function() {
		cart.find('#edit-submit').prependTo(cart.find('thead .views-field-edit-quantity'));
		cart.find('th.views-field-edit-quantity').attr('colspan',2);
		cart.find('th.views-field-edit-delete').hide();
		// cart.find('#edit-checkout').val('Proceed to checkout');
		// shopping cart block
		$(function() {
			var title = footer.find('.ajax-shopping-cart-wrapper h2'),
				link = footer.find('.more-info a:first');

			title.wrapAll('<a href="/cart" class="cart-block-title"></a>');
			link.hide();
		});
	});
	// messages hide after period of time
	$(function() {
    	setTimeout(function() {
    	    $('.messages').hide('blind')
    	}, 7500);
	});
  });
})(jQuery);
