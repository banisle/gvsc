$(document).ready(function () {

	var _pc = 0;
	var _mo = 0;

	$(window).on('load resize', function () {
		var $w = $(this).width();

		if ($w > 960) {

			if ( _pc == 0 ) {
				_pc = 1;

				var $nav = $('.gnb'),
					$a = $nav.find('> ul > li > a'),
					$sBar = $nav.find('.floatBar');

				$a.on('mouseover', function () {
					var _t = $(this),
						_tP = $(this).parent(),
						aW = _t.width(),
						aL = _tP.position().left;

					$sBar.css({
						'width': aW,
						'left': aL + 100
					});
				});
				ANUI.module.gnbAllUi();

			}
		} else {
			$('.aui-allsub').off('mouseenter focusin mouseleave focusout');

			if ( _mo == 0) {
				_mo = 1;

				var $moBtn = $('.mo-menu'),
					$headerGnb = $('header .gnb'),
					$fold = $headerGnb.find('.dep1');


					$moBtn.on('click', function () {
						$(this).toggleClass('on');
						$headerGnb.toggleClass('on');
						$('html').toggleClass('fixed');
					});

					$fold.on('click',function(e){
						e.preventDefault();
						$(this).parent().toggleClass('on');
					});
					ANUI.module.gnbAllUi();

			}
		}
	});
});