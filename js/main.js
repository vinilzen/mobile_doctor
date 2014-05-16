$(function() {

	function isIE () {
		var myNav = navigator.userAgent.toLowerCase();
		return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	var max_portrait_width = 480,
		left_menu = $('.left-menu');


	$('.btn-group.btn-centr button').click(function() {
		if (!$(this).hasClass('active')) {
			$('.btn-group.btn-centr button').removeClass('active');
			$(this).addClass('active');
		}
	});


	$('#show_menu').click(function(){
		if (document.body.clientWidth < max_portrait_width) {
			left_menu.toggleClass('active');
			return false;
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
		var type = $(this).attr('data-type');

		if (type) {
			var top_menu = $('.top-menu.'+type).addClass('active'),
				nav_height = $('.navbar').outerHeight();

			if (document.body.clientWidth < max_portrait_width) {
					top_menu.css({top:0});
			} else {
				if ( isIE() == 9) {
					top_menu.css({
						top:0,
						height:'100%',
						width:'100%'
					});
				} else {
					top_menu.css({top:-nav_height});
				}
			}
		} else {
			console.log('Не понятно какое меню открывать, для клиниики или для доктора?');
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

	left_menu.swipeleft(function(e) {
		if (document.body.clientWidth < max_portrait_width) {
			left_menu.removeClass('active');
		}
	});


	// анимация для кнопок
	$( ".btn-lg:not(.btn-warning)" ).click(function() {
		$( this ).toggleClass( "animated" );
	});

	// прячем меню фильтра при повороте экрана
	var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
	window.addEventListener(orientationEvent, function() {
		var h1 = $('.top-menu.menu-clinic').outerHeight();
		$('.top-menu.menu-clinic').css({top: -h1}).removeClass('active');

		var h2 = $('.top-menu.menu-doc').outerHeight();
		$('.top-menu.menu-doc').css({top: -h2}).removeClass('active');
	}, false);


	$('#close-left-menu').click(function(){
		if (document.body.clientWidth<max_portrait_width) {
			left_menu.removeClass('active');
		}
	});
/*
	// убираем меню по клику за его передлами
	$(document).on('click', function(event) {
		if (left_menu.hasClass('active')) {
			if ($(event.target).closest(".left-menu").length === 0) {
				if (document.body.clientWidth<max_portrait_width) {
					left_menu.removeClass('active');
				}
			}
		}
	});
*/

	if ( isIE() == 9) {
		
		$('#main').css({ height: $( window ).height() - 43 });


		if ($( window ).width() > max_portrait_width ){
			$('#main').css({ width: $( window ).width() - 54 });
		}


		$('.ico-map.doc-ico').css({ top: $( window ).height() - 51 });

		$( window ).resize(function() {
			$('#main').css({ height: $( window ).height() - 43 });

			if ($( window ).width() > max_portrait_width )
				$('#main').css({ width: $( window ).width() - 54 });
			else
				$('#main').css({ width: '100%' });
			
			$('.ico-map.doc-ico').css({ top: $( window ).height() - 48 })

		});
	} 
});