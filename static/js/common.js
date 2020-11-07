$(document).ready(function(){
	// gnb
	ANUI.module.gnbAllUi();

	var $nav = $('.gnb'),
    $a = $nav.find('> ul > li > a'),
    $sBar = $nav.find('.floatBar');

    $a.on('mouseover', function(){
		var _t = $(this),
			_tP = $(this).parent(),
			aW = _t.width(),
            aL = _tP.position().left;

        $sBar.css({
            'width': aW,
            'left' : aL + 100
		});
	});
	//tab
	ANUI.module.tabUi();
	// modal
	ANUI.module.modalUi();


});