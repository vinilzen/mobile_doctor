$(function() {
	$('.btn-group.btn-centr button').click(function() {
		if (!$(this).hasClass('active')) {
			$('.btn-group.btn-centr button').removeClass('active');
			$(this).addClass('active');
		}
	});


	$('.ico-menu').click(function(){
		if (document.body.clientWidth<480) {
			if ( $('.left-menu').hasClass('active') ) {
				$('.left-menu')
					.animate({left:'-80%'})
					.removeClass('active');
			} else {
				$('.left-menu')
					.animate({left:0})
					.addClass('active');
			}
		}
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
				$('.left-menu')
					.animate({left:0})
					.addClass('active');
			}
		})
		.swipeleft(function(e) {
			if (document.body.clientWidth<480) {
				$('.left-menu')
					.animate({left:'-80%'})
					.removeClass('active');
			}
		});

});