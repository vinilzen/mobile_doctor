$(function() {
	$('.btn-group.btn-centr button').click(function() {
		if (!$(this).hasClass('active')) {
			$('.btn-group.btn-centr button').removeClass('active');
			$(this).addClass('active');
		}
	});


	if ($('.slick').length){

		$('.slick').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false
		});

	}
});