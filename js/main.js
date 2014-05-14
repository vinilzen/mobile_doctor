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

	var h = $('.top-menu').outerHeight();
	$('.top-menu').css({top: -h});

	$('.ico-settings, .cancel-set').click(function(){
		$('.top-menu').toggleClass('active');

		if (document.body.clientWidth<480) {
			if ($('.top-menu').hasClass('active') ) {
				$('.top-menu').css({top:0});
			} else {
				var h = $('.top-menu').outerHeight();
				$('.top-menu').css({top: -h});
			}
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

	$('.container-main, .left-menu')
		.swiperight(function(e) {
			if (document.body.clientWidth<480) {
				$('.left-menu').addClass('active');
			}
		})
		.swipeleft(function(e) {
			if (document.body.clientWidth<480) {
				$('.left-menu').removeClass('active');
			}
		});

	$( ".btn-lg:not(.btn-warning)" ).click(function() {
		$( this ).toggleClass( "animated" );
	});

});