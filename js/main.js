$(function() {
	$('.btn-group.btn-centr button').click(function() {
		if (!$(this).hasClass('active')) {
			$('.btn-group.btn-centr button').removeClass('active');
			$(this).addClass('active');
		}
	});


	$('.ico-menu').click(function(){
		if (document.body.clientWidth<480) {
			$('.left-menu').toggleClass('active');
		}
	});

	var h1 = $('.top-menu.menu-clinic').outerHeight(),
		h2 = $('.top-menu.menu-doc').outerHeight();
	
	$('.top-menu.menu-clinic').css({top: -h1});
	$('.top-menu.menu-doc').css({top: -h2});



	$('.cancel-set').click(function(){
		var type = $(this).attr('data-type'),
			top_menu = $('.top-menu.'+type),
			h = top_menu.outerHeight();
		
		top_menu.css({
			top: -h,
		}).removeClass('active');

		return false;
	});

	$('.ico-settings').click(function(){
		var type = $(this).attr('data-type'),
			top_menu = $('.top-menu.'+type).addClass('active');

		if (document.body.clientWidth<480) {
				top_menu.css({top:0});
		} else {
			top_menu.css({top:-43});
		}
		return false;
	});



	// Галерея для картинок в инфо клиниики
	if ($('.slick').length){
		$('.slick').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false
		});
	}

	// $('.container-main, .left-menu')
	$('.left-menu')
		// .swiperight(function(e) {
		// 	if (document.body.clientWidth<480) {
		// 		$('.left-menu').addClass('active');
		// 	}
		// })
		.swipeleft(function(e) {
			if (document.body.clientWidth<480) {
				$('.left-menu').removeClass('active');
			}
		});

	$( ".btn-lg:not(.btn-warning)" ).click(function() {
		$( this ).toggleClass( "animated" );
	});

});