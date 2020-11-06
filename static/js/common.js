$(document).ready(function(){
	// gnb
	ANUI.module.gnbAllUi();

	var $nav = $('.gnb'),
    $a = $nav.find('> ul > li > a'),
    $sBar = $nav.find('.floatBar');

    $a.on('mouseover', function(){
        var aW = $(this).width(),
            aL = $(this).offset().left;

        $sBar.css({
            'width': aW,
            'left' : aL - 223
		});
	});


});