$(document).ready(function () {
	$('#contact_form').ajaxForm({ target: '#contact_alert' });
});

	$('.flexslider').flexslider({
		animation      : "slide",
		animationSpeed : 500,
		easing         : "easeInOutCirc",
		useCSS         : false,
		controlNav     : false,
		prevText       : '&#xf053;',
		nextText       : '&#xf054;',
		start          : function() {
			$('.flexslider').removeClass('loading');
		}
	});

	$(window).smartresize();

});