// https://banisle.github.io/angry.ui/

'use strict';
var context = window,
	$root = $(document.documentElement).addClass("js"),
	tmpInput = document.createElement("input"),
	isTouch = ("ontouchstart" in context),
	isMobile,
	supportPlaceholder = ("placeholder" in tmpInput),
	detectIe = get_version_of_IE();

isTouch && $root.addClass("touch");
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
	/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	console.log('mobile');
	0
	$root.addClass("mobile");
	isMobile = true;
}

// userAgent 추가 분류
var chkUserAgent = function () {
	var ua = window.navigator.userAgent,
		isChrome = {
			agent: ua.indexOf('Chrome/'),
			name: 'isChrome'
		},
		isFireFox = {
			agent: ua.indexOf('Firefox/'),
			name: 'isFireFox'
		},
		isChEdge = {
			agent: ua.indexOf('Edg/'),
			name: 'isChEdge'
		},
		isMsEdge = {
			agent: ua.indexOf('Edge/'),
			name: 'isMsEdge'
		},
		usName;

	var arrUA = [isChrome, isFireFox, isChEdge, isMsEdge];

	arrUA.forEach(function (item, index) {
		if (item.agent > -1) {
			usName = arrUA[index].name
		}
	});

	$root.addClass(usName);
}();

function get_version_of_IE() { //ie aegent 체크
	var word;
	var agent = navigator.userAgent.toLowerCase();
	// IE old version ( IE 10 or Lower )
	if (navigator.appName == "Microsoft Internet Explorer") word = "msie ";
	// IE 11
	else if (agent.search("trident") > -1) word = "trident/.*rv:";
	// Microsoft Edge
	else if (agent.search("edge/") > -1) word = "edge/";
	// 그외, IE가 아니라면 ( If it's not IE or Edge )
	else return -1;
	var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
	if (reg.exec(agent) != null) return parseInt(RegExp.$1 + RegExp.$2);
	return -1;
}

if (!(window.console && console.log)) {
	console = {
		log: function () {},
		debug: function () {},
		info: function () {},
		warn: function () {},
		error: function () {}
	};
}

// 해상도 체크 클래스
var resChk = function () {
	$(window).on('resize.changemediasize load', function () {
		var $window = $(window),
			$html = $('html'),
			_res = [{
				mode: "w376",
				min: 0,
				max: 376
			}, {
				mode: "w768",
				min: 376,
				max: 768
			}, {
				mode: "w1024",
				min: 768,
				max: 1024
			}, {
				mode: "w1280",
				min: 1024,
				max: 1280
			}, {
				mode: "wide",
				min: 1280,
				max: 100000
			}];

		var curW = $window.width();

		for (var i = 0, wmode; wmode = _res[i]; i++) {

			if (curW > wmode.min && curW <= wmode.max) {
				wmode.width = curW;
				console.log(wmode.mode);

				switch (wmode.mode) {
					case "wide":
						$html.removeClass("w376 w768 w1024 w1280");
						break;
					case "w1280":
						$html.addClass("w1280").removeClass("w376 w768 w1024");
						break;
					case "w1024":
						$html.addClass("w1024").removeClass("w376 w768 w1280");
						break;
					case "w768":
						$html.addClass("w768").removeClass("w376 w1024 w1280");
						break;
					case "w376":
						$html.addClass("w376 w768").removeClass("w1024 w1280");
						break
				}

				$window.trigger("changemediasize", false);
				break
			}
		}

	});
}();

if (typeof Function.prototype.bind === "undefined") {
	Function.prototype.bind = function () {
		var fn = this,
			args = arraySlice.call(arguments),
			object = args.shift();
		return function (context) {
			var local_args = args.concat(arraySlice.call(arguments));
			if (this !== window) {
				local_args.push(this)
			}
			return fn.apply(object, local_args)
		}
	}
}

// polyfill
if (!Math.sign) {
	Math.sign = function (x) {
		// If x is NaN, the result is NaN.
		// If x is -0, the result is -0.
		// If x is +0, the result is +0.
		// If x is negative and not -0, the result is -1.
		// If x is positive and not +0, the result is +1.
		return ((x > 0) - (x < 0)) || +x;
		// A more aesthetic pseudo-representation:
		//
		// ( (x > 0) ? 1 : 0 )  // if x is positive, then positive one
		//          +           // else (because you can't be both - and +)
		// ( (x < 0) ? -1 : 0 ) // if x is negative, then negative one
		//         ||           // if x is 0, -0, or NaN, or not a number,
		//         +x           // then the result will be x, (or) if x is
		//                      // not a number, then x converts to number
	};
}

var ANUI = ANUI || {};

ANUI.module = (function () {
	// (sta) ANUI returm module
	return {
		// mark : tabUi
		tabUi: function () {
			var uiTabWrap = $('.aui-tab-wrap'),
				uiTab = uiTabWrap.find('.aui-tab'),
				uiTabBtn = uiTab.find('.aui-tab-btn'),
				uiTabBtnA = uiTabWrap.find('a.aui-tab-btn'),
				uiTabBtnRad = uiTabWrap.find('label.aui-tab-btn').prev('input[type=radio]');


			// a 탭 버튼
			uiTabBtnA.on('click', function (e) {

				var index = $(this).closest('li').index();

				$(this).closest(uiTabWrap).removeClass(function (index, className) {
					return (className.match (/(^|\s)i-\S+/g) || []).join(' ');
				}).addClass('i-' + index);

				e.preventDefault();

				if ($(this).hasClass('on')) return;

				$(this).closest(uiTabWrap).find(uiTabBtn).removeClass('on').attr({
					"tabindex": "-1",
					"aria-selected": "false"
				});
				$(this).addClass('on').attr({
						"tabindex": "0",
						"aria-selected": "true"
					})
					.focus();

				$("#" + $(this).attr("aria-controls"))
					.attr("tabindex", "0")
					.addClass("on")
					.siblings('.aui-tab-list')
					.attr("tabindex", "-1")
					.removeClass("on");
			});
			uiTabBtnA.filter('.on').trigger('click');

			// 라디오 탭 버튼
			uiTabBtnRad.on('change', function (e) {

				var index = $(this).closest('li').index();

				$(this).closest(uiTabWrap).removeClass(function (index, className) {
					return (className.match (/(^|\s)i-\S+/g) || []).join(' ');
				}).addClass('i-' + index);


				var _this = $(this).next('label');

				if (_this.hasClass("on")) return;

				$(this).closest(uiTabWrap).find(uiTabBtn).removeClass("on").attr({
					"aria-selected": "false",
				});

				_this.addClass("on").attr({
					"aria-selected": "true"
				});

				$("#" + _this.attr("aria-controls"))
					.attr("tabindex", "0")
					.addClass("on")
					.siblings('.aui-tab-list')
					.attr("tabindex", "-1")
					.removeClass("on");
			});
			uiTabBtnRad.filter(':checked').trigger('change');


			// 탭 키 초점
			uiTabBtn.on("keydown", function (event) {
				event = event || window.event;
				event.preventDefault ? event.preventDefault() : event.returnValue = false;
				var keycode = event.keyCode || event.which;

				if ($(event.target).prev().is('input[type=checkbox]') || $(event.target).prev().is('input[type=radio]')) {
					return;
				};

				switch (keycode) {
					case 37: // left arrow

						if ($(this).closest('li').prev().length == 1) {
							$(this)
								.attr("tabindex", "-1")
								.closest('li').prev().find(uiTabBtn)
								.attr("tabindex", "0")
								.focus();
						} else {

							// 초점이 첫 번째 요소에 있었다면, 마지막 탭으로 초점 이동
							$(this)
								.attr("tabindex", "-1")
								.closest(uiTab).children().last().find(uiTabBtn)
								.attr("tabindex", "0")
								.focus();
						}
						break;
					case 39: // right arrow

						if ($(this).closest('li').next().length == 1) {
							$(this)
								.attr("tabindex", "-1")
								.closest('li').next().find(uiTabBtn)
								.attr("tabindex", "0")
								.focus();

						} else {
							// 초점이 마지막 요소에 있었다면, 첫 번째 탭으로 초점 이동
							$(this)
								.attr("tabindex", "-1")
								.closest(uiTab).children().first().find(uiTabBtn)
								.attr("tabindex", "0")
								.focus();
						}
						break;
					case 32: // Space
					case 13: // Enter
						// 기존 탭 비활성화
						$(this).closest(uiTab).children().find(uiTabBtn)
							.removeClass("on")
							.attr("aria-selected", "false");
						// 선택된 탭 활성화
						$(this)
							.addClass("on")
							.attr("aria-selected", "true")
						// 연관된 탭 패널 활성화
						$("#" + $(this).attr("aria-controls"))
							.attr("tabindex", "0")
							.addClass("on");
						// 기존 탭 패널 비활성화
						$("#" + $(this).attr("aria-controls")).siblings('.aui-tab-list')
							.attr("tabindex", "-1")
							.removeClass("on");
						break;
				}
			});


			//탭 상세로 이동 (tab키)
			uiTab.on("keydown", ".on", function (event) {
				event = event || window.event;
				var keycode = event.keyCode || event.which;


				// tab 키 눌렀을 때 (shift + tab은 제외)
				if (!event.shiftKey && keycode === 9) {
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					$("#" + $(this).attr("aria-controls"))
						.attr("tabindex", "0")
						.addClass("on")
						.focus()
						.siblings('.aui-tab-list')
						.attr("tabindex", "-1")
						.removeClass("on");
				}
			});


			console.log('tabUi');
		},

		// mark : selectUi
		selectUi: function () {
			var selId,
				selectUibox,
				$selWrap = $('.select-wrap.aui-selectbox'),
				$selBox,
				$optGrp,
				scrollOn = false;

			selectUibox = function (selId) {
				$selBox = $('#' + selId + ''),
					$optGrp = $selBox.find('option');


				//포커스 잃었을때
				$(document).on('focusin click', function (e) {
					if ($selWrap) {
						if (!$selWrap.find(e.target).length) {
							//셀렉트 결과 창 닫기
							$selWrap.removeClass('active aui-result-active');
						}
					}
				});

				this.init();
				this.createDiv();
				this.selUpdate();
				this.selOne();

			};

			selectUibox.prototype.init = function () {
				$selBox.hide();
				$selBox.closest($selWrap).attr('data-select', selId);

			};
			selectUibox.prototype.createDiv = function () {
				var appendLi = '';


				// 중복생성 체크
				if ($selBox.closest($selWrap).find('.pc_selwrap').length < 1) {
					$selBox.closest($selWrap)
						.append($('<div class="pc_selwrap"><div class="selOneWrap"><button class="aui-selected-one" aria-haspopup="listbox" aria-labelledby="sel_' + selId + '">' + $selBox.find(':selected').text() + '</button></div><div class="aui-result-ul" tabindex="-1" role="listbox" ><ul></ul></div>'));

					$selBox.find($optGrp).each(function (i) {
						var isDisabled = $(this).prop('disabled') ? 'disabled' : '',
							isHidden = $(this).prop('hidden') ? true : false,
							selVal = $(this).prop('value'),
							optTitle = $(this).prop('title');

						//히든속성 체크
						if (isHidden === true) {
							return;
						} else {
							appendLi += '<li><button role="option" ' + isDisabled + ' title="' + optTitle + '" aria-labelledby="sel_' + selId + '" value=' + selVal + '>' + $optGrp.eq(i).text() + '</button></li>';
						}

					});

					$selBox.closest($selWrap).find('ul').html(appendLi);

					// 옵션 ul 높이 구하기
					var $uiResult = $selBox.closest($selWrap).find('.aui-result-ul'),
						uiResultH = Number($uiResult.css('height').split('px')[0]),
						uiResultulH = $uiResult.show().find('ul').outerHeight();
					// console.log($selBox,uiResultH,uiResultulH);
					//옵션 이 css지정된 height보다 클 경우 스크롤 실행
					if (uiResultH < uiResultulH) {

						scrollOn = 'true';
						$uiResult.find('ul')
							.wrapAll('<div class="scrollWrap aui-scrollview"><div class="scrollInner aui-scrollarea"><div class="scrollview aui-content"></div></div></div>');

						$uiResult.find('.aui-scrollview').prepend('<div class="aui-scrollbar"><span class="bar"></span></div>');

					}




				}


			};

			selectUibox.prototype.selUpdate = function () {
				var $selBox = $('#' + selId + ''),
					$selectedOne = $selBox.closest($selWrap).find('.aui-selected-one'),
					$uiResult = $selBox.closest($selWrap).find('.aui-result-ul'),
					isHidden = $selBox.find('option').prop('hidden') ? true : false;

				$uiResult.find('button').on('click', function (e) {
					var index = isHidden ? $(this).parent().index() + 1 : $(this).parent().index();

					//셀렉트박스 셀렉트
					$selBox.find('option').eq(index).prop('selected', true).change();
					// 선택된 값 출력
					$selectedOne.text($selBox.find('option').eq(index).text()).removeAttr('aria-expanded');
					//셀렉트 결과 창 닫기
					$selWrap.removeClass('aui-result-active');
					//셀렉트박스 포커스
					$(this).closest($selWrap).find($selectedOne).focus();


					e.preventDefault();
				});
			}

			selectUibox.prototype.selOne = function () {
				var $selBox = $('#' + selId + ''),
					$selectedOne = $selBox.closest($selWrap).find('.aui-selected-one');


				$selectedOne.on('click', function (e) {
					// console.log($selBox.prop('disabled'));
					if ($selBox.prop('disabled')) {
						return false;
					}
					$selWrap.removeClass('active aui-result-active');
					$selectedOne.removeAttr('aria-expanded');
					$(this).attr('aria-expanded', true).closest($selWrap).removeClass('active aui-result-active').addClass('active aui-result-active');
					e.preventDefault();
					// 스크롤 길때 스크롤 ui호출
					if (scrollOn == 'true') {
						ANUI.module.scrollUi();
						scrollOn = 'false';
					}

				});

			}


			$.each($selWrap, function (i) {
				selId = $selWrap.eq(i).find('select').attr('id');
				new selectUibox('' + selId + '');

			});



			console.log('selectUi');


		},

		// mark : modalUi
		modalUi: function (maskClick) {
			var mvBtn = $('[data-modal]'),
				btnClose = $('.mvClose'),
				optTrans = 'false',
				openSt = 'false',
				mask = '<div class="mask">',
				$layer = $('.wrap-modal .inner'),
				$mask = $('.laypop .mask'),
				mvId,
				maskClick = maskClick || false,
				bodyIsOverflowing,
				$this;

			// 브라우저 스크롤바 크기 구하기
			function scrollbarWidth() {
				var inner = document.createElement('p');
				inner.style.width = "100%";
				inner.style.height = "200px";

				var outer = document.createElement('div');
				outer.style.position = "absolute";
				outer.style.top = "0px";
				outer.style.left = "0px";
				outer.style.visibility = "hidden";
				outer.style.width = "200px";
				outer.style.height = "150px";
				outer.style.overflow = "hidden";
				outer.appendChild(inner);

				document.body.appendChild(outer);
				var w1 = inner.offsetWidth;
				outer.style.overflow = 'scroll';
				var w2 = inner.offsetWidth;
				if (w1 == w2) w2 = outer.clientWidth;

				document.body.removeChild(outer);

				return (w1 - w2);
			};

			// 접근성 키보드 포커스 제어
			function trapFocus(mvId, namespace) {
				var element = $('[data-target=' + mvId + ']')[0],
					firstFocusableEl = $('[data-target=' + mvId + ']').find('.dialog-start')[0],
					lastFocusableEl = $('[data-target=' + mvId + ']').find('.dialog-end')[0],
					KEYCODE_TAB = 9;

				element.addEventListener('keydown', function (e) {
					var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

					if (!isTabPressed) {
						return;
					}

					if (e.shiftKey) /* shift + tab */ {
						if (document.activeElement === firstFocusableEl) {
							lastFocusableEl.focus();
							e.preventDefault();
						}
					} else /* tab */ {
						if (document.activeElement === lastFocusableEl) {
							firstFocusableEl.focus();
							e.preventDefault();
						}
					}

				});
			}


			var dimLyOpen = function (mvId, maskClick) {
				var $targetM = $('[data-target=' + mvId + ']'),
					wrapStat = $targetM.find('.dialog-start').length;

				if (openSt == 'true') {
					return;
				}
				//스크롤바가 생겼는지 체크
				bodyIsOverflowing = Math.sign($(window).height() - $(document).height()) > 0 ? 'true' : 'false';

				//모달 출력시 바닥 고정
				$('html').addClass('fixed');
				// pc일떄만 스크롤바 있을때만 오른쪽 여백 생성
				if (!isMobile) {
					if (bodyIsOverflowing && scrollbarWidth) {
						$('html').css('padding-right', scrollbarWidth);
					}
				}
				// 접근성 : 호출 모달에 포커스 및 탭 인덱스 설정
				$targetM.attr('tabindex', -1).fadeIn(0).focus();

				// trapFocus를 위한 엘리먼트 추가
				if (wrapStat < 1) {
					$targetM.prepend('<div class="dialog-start" tabindex="0">').append('<div class="dialog-end" tabindex="0">');
				}

				if ($targetM.find('.mask').length) {
					$mask.show();
				} else {
					$targetM.prepend(mask);
				}

				if (optTrans == 'true') {
					$targetM.addClass('on');
				}

				//ie9 flag
				if (detectIe == '9') {
					$('[data-target=' + mvId + '] .inner').css({
						'top': '50%',
						'marginTop': -($targetM.find('.inner').height() / 2)
					});
				}

				// pc에서만 스크롤 ui 호출
				if (!isMobile) {
					ANUI.module.scrollUi();
				}

				openSt = 'true';
				// console.log('open');

				//바닥 클릭시 창 닫기 옵션
				if (maskClick == true) {
					$(document).on('click', function (e) {
						// e.preventDefault();
						if (e.target.className === 'wrap-modal') {
							$('.mvClose').find(':visible').trigger('click');
						}
					});
				} else {
					$(document).off('click');
				}

				// 트랩포커스
				trapFocus(mvId);


			}

			var dimLyClose = function (mvId) {
				$('html').removeClass('fixed');
				$('html').css('padding-right', '');
				if (optTrans == 'true') {
					//css transition ease값 = delay
					$('[data-target=' + mvId + ']').removeClass('on').delay(500).fadeOut(0);
				} else {
					$('[data-target=' + mvId + ']').hide(0);
				}
				openSt = 'false';
				// console.log('close');
			}

			mvBtn.on('click', function (e) {
				e.preventDefault();

				mvId = $(this).attr('data-modal');
				$('[data-target=' + mvId + ']').hasClass('trans-ms') ? optTrans = 'true' : optTrans = 'false';

				dimLyOpen(mvId, maskClick);

				$this = $(this);
			});

			btnClose.on('click', function (e) {
				e.preventDefault();
				dimLyClose(mvId);
				$this.focus();
			});

			//외부 제어용 플러그인형식
			$.fn.modalUi = function (evt, mvId, maskClick, t) {


				if (evt === 'open') {
					$this = t;
					dimLyOpen(mvId, maskClick);
				} else if (evt === 'close') {
					dimLyClose(mvId);
				}
				return this;
			}


			console.log('modalUi');
		},
		// mark :scrollUi
		scrollUi: function () {

			// 모바일 체크
			// console.log('pc',!isMobile);

			if (!isMobile) {

				var scrollWrap = $('.aui-scrollview'),
					scrollArea = scrollWrap.find('.aui-scrollarea'),
					scrollCt = scrollArea.find('.aui-content'),
					scrollBar = scrollWrap.find('.aui-scrollbar'),
					barCursor = scrollBar.find('.bar'),
					down = false,
					rangeTop,
					rangeSize;

				if (scrollWrap.length !== 0) {
					//scroll width & height 구하기
					var i = 0;

					scrollWrap.each(function (i) {
						var wrapW = scrollWrap.eq(i).parent().width(),
							wrapH = scrollCt.eq(i).prop('scrollHeight'),
							wrapOrgH = scrollWrap.eq(i).height(),
							barSize = parseFloat((wrapOrgH / wrapH) * 100);

						// console.log(
						//     'wrapW' + wrapW,
						//     'wrapOrgH' + wrapOrgH,
						//     'wrapH' + wrapH,
						//     'barSize' + barSize
						//     );
						scrollWrap.eq(i).width(wrapW);
						scrollCt.eq(i).width(wrapW).height(wrapOrgH);

						barCursor.eq(i).height(barSize + '%');

					});

					// scrollbar 위치 구하기
					scrollArea.on('scroll', function () {
						var t = $(this),
							wrapH = t.find('.aui-content').prop('scrollHeight'),
							wrapOrgH = t.parent().height(),
							barCursor = t.parent().find('.bar'),
							barSize = barCursor.height(),
							scTop = $(this).scrollTop(),
							scTopPer = parseFloat(scTop / ((wrapH - wrapOrgH) / 100)),
							barPer = (wrapOrgH - barSize) / 100;

						barCursor.eq(i).css({
							'top': parseFloat(barPer * scTopPer) + 'px'
						});
					});

					scrollBar.on('mousedown', function (e) {
						var t = $(this);
						rangeTop = t.offset().top,
							rangeSize = t.height();
						scrollCt = t.closest(scrollWrap).find(scrollArea),
							down = true;


						// console.log(scrollCt);


						return false;
					});

					$(document).on('mousemove', function (e) {
						updateDrag(e);
					});

					$(document).on('mouseup', function () {
						down = false;
					});

					//스크롤바 drag 이벤트
					var updateDrag = function (e) {
						var t = $(e.target),
							barCursor = t.closest(scrollWrap).find('.bar'),
							barSize = parseFloat(barCursor.height()) / 2,
							curTop = e.pageY - rangeTop - barSize,
							curScTop = Math.round((curTop * 100) / (rangeSize - (barSize * 2)) * (scrollCt.find('.aui-content').prop('scrollHeight') - scrollCt.height()) / 100);

						// console.log('updateDrag',e.pageY,rangeTop,barSize);

						if (down && e.pageY >= (rangeTop + barSize) && e.pageY <= (rangeTop + rangeSize - barSize)) {
							barCursor.css('top', curTop + 'px');
							scrollCt.scrollTop(curScTop);

						}

					}




					// 리사이즈시 적용
					var thisObj = this;

					$(window).on('resize', function () {
						clearTimeout(window.resizedFinished);
						window.resizedFinished = setTimeout(function () {
							thisObj.scrollUi();
							// console.log('s');

						}, 250);
					});


					console.log('scrollUi');
				}
			}
		},
		// mark : accoUi
		accoUi: function () {
			var uiAccoWrap = $('.aui-accordian'),
				uiAccobtn = uiAccoWrap.find('.aui-btn-acco'),
				uiAccoCt = uiAccoWrap.find('.aui-acco-ct'),
				ArrBtn = Array.prototype.slice.call(uiAccobtn),
				ArrSubBtn = ArrBtn.filter(function (i) {
					return $(i).hasClass('sub');
				}),
				tarCtH;

			// console.log( ArrSubBtn );


			//click evt
			uiAccobtn.on('click', function (e) {
				var t = $(this),
					allowMultiple = t.closest(uiAccoWrap).attr('data-allow-multiple') == 'true',
					isExpanded = t.attr('aria-expanded') == 'true',
					isSub = t.closest(uiAccoWrap).hasClass('sub-accord'),
					tarId = t.attr('aria-controls'),
					tarCt = t.closest(uiAccoWrap).find('#' + tarId),
					motSpd = parseInt(t.closest(uiAccoWrap).attr('data-trans-speed')),
					tarCtH = t.closest(uiAccoWrap).find(tarCt).height(),
					tarCtAH = t.closest(uiAccoWrap).find(tarCt)[0].scrollHeight;

				if (tarCt.is(':animated')) {
					return
				}

				if (!isExpanded) {
					//다중 열기 불가능
					if (!allowMultiple) {
						t.closest(uiAccoWrap).find(uiAccoCt).animate({
							'height': 0
						}, motSpd);
						t.closest(uiAccoWrap).find(uiAccobtn).attr('aria-expanded', 'false').removeAttr('aria-disabled');
						t.closest(uiAccoWrap).find('li').removeClass('active');
						t.attr('aria-disabled', 'true');
					};

					t.attr('aria-expanded', 'true');
					t.closest('li').addClass('active');
					//서브 어코디언 클릭시 부모의 높이값 증가
					if (isSub) {
						var pH = t.closest(uiAccoCt).height();
						t.closest(uiAccoCt).height(parseInt(pH) + parseInt(tarCtAH));
					}
					t.closest(uiAccoWrap).find(tarCt).stop().height(tarCtH).animate({
						'height': tarCtAH + 'px'
					}, motSpd);


				} else {

					//다중 열기 불가능
					if (!allowMultiple) {
						if (isExpanded) {
							return
						};
						t.attr('aria-expanded', 'false');
						t.closest(uiAccoWrap).find(uiAccoCt).animate({
							'height': 0
						}, motSpd);
						t.closest(uiAccoWrap).find(uiAccobtn).attr('aria-expanded', 'false');
						t.closest(uiAccoWrap).find(tarCt).stop().animate({
							'height': tarCtAH + 'px'
						}, motSpd);
						t.removeAttr('aria-disabled');
						t.closest('li').addClass('active');
						return;
					};

					t.attr('aria-expanded', 'false')
					//서브 어코디언 클릭시 부모의 높이값 감소
					if (isSub) {
						var pH = t.closest(uiAccoCt).height();
						t.closest(uiAccoCt).height(parseInt(pH) - parseInt(tarCtAH));
					}
					t.closest(uiAccoWrap).find(tarCt).stop().animate({
						'height': 0
					}, motSpd);
					t.closest('li').removeClass('active');
				}

				e.preventDefault();

			}).on('focus', function () {
				$(this).closest(uiAccoWrap).addClass('focus');
			}).on('blur', function () {
				$(this).closest(uiAccoWrap).removeClass('focus');
			});

			// 키 바인딩
			uiAccoWrap.on('keydown', function (e) {
				var target = e.target;
				var key = e.which.toString();


				// 33 = Page Up, 34 = Page Down
				var ctrlModifier = (e.ctrlKey && key.match(/33|34/));

				// Is this coming from an accordion header?
				if (uiAccobtn) {
					// Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
					// 38 = Up, 40 = Down
					if (key.match(/38|40/) || ctrlModifier) {
						var index = ArrBtn.indexOf(target);
						var direction = (key.match(/34|40/)) ? 1 : -1;
						var length = ArrBtn.length;
						var newIndex = (index + length + direction) % length;

						//서브 아코디언 있을경우
						if ($(target).is('.sub-has') && $(target).attr('aria-expanded') == 'false') {
							direction == 1 ? newIndex = newIndex + ArrSubBtn.length : newIndex;
						} else if ($(target).is('.aui-sub-next') && $(target).closest('[data-li]').prev().find(uiAccobtn).attr('aria-expanded') == 'false') {
							direction == -1 ? newIndex = newIndex - ArrSubBtn.length : newIndex;
						};

						ArrBtn[newIndex].focus();

						e.preventDefault();
					} else if (key.match(/35|36/)) {
						// 35 = End, 36 = Home keyboard operations
						switch (key) {
							// Go to first accordion
							case '36':
								ArrBtn[0].focus();
								break;
								// Go to last accordion
							case '35':
								ArrBtn[ArrBtn.length - 1].focus();
								break;
						}
						e.preventDefault();

					}

				}
			});



			//init
			// uiAccoCt.hide();
			uiAccoWrap.each(function () {
				var t = $(this);
				t.find('.aui-btn-acco').last().addClass('last');
			});
			// 서브 어코디언 있을때 다음 어코디언(키맵핑)에 클래스 추가
			if ($('.sub-has').length !== 0) $('.sub-has').closest('[data-li]').next().find(uiAccobtn).addClass('aui-sub-next');

			console.log('accoUi');

		},

		// mark : searchUi
		searchUi: function () {
			var searchBtn = function () {
				var $searchWrap = $('.search-wrap'),
					$searchInp = $searchWrap.find('.inp-form input'),
					$btnIcn = $searchWrap.find('.icn--search');

				$searchInp.on('click focus', function () {
					$(this).closest($search - wrap).find($btnIcn).addClass('active');
				}).on('blur', function () {
					$(this).closest($search - wrap).find($btnIcn).removeClass('active');
				});
			}();

			this.inputDelUi();

			console.log('searchUi');

		},
		// mark : input del
		inputDelUi: function () {
			var inpTxtDel = function () {
				var $inp_form = $('.aui-hasDelForm'),
					$inp = $inp_form.find('input.aui-hasDel'),
					$btnDel = $('.aui-deltxt'),
					isOpen = false;

				// 삭제 버튼 생성
				var createDelbtn = function (e) {
					var $btn = '<button type="button" class="aui-deltxt" title="내용 삭제"></button>',
						$this = $(e);

					$this.append($btn);
				}
				createDelbtn($inp_form);

				$inp.on('input propertychange', function (e) {
					var t = $(e.target),
						visible = Boolean(t.val()),
						$btnDel = $('.aui-deltxt');


					t.closest($inp_form).find($btnDel).toggleClass('hidden', !visible);
				}).trigger('propertychange');

				//포커스 잃었을때
				// $(document).on('focusin click', function (e) {
				//     var $btnDel = $('.aui-deltxt');

				//     if ($inp_form) {
				//         if (!$inp_form.find(e.target).length) {
				//             $btnDel.removeClass('active');
				//         }
				//     }
				// });

				// 삭제 버튼 클릭
				$(document).on('click', $btnDel, function (e) {

					var $t = $(e.target);
					$t.prev($inp).val('').trigger('propertychange').focus();

				});
			}();
			console.log('inputDelUI');
		},

		// mark: fileAttach
		fileAttachUi: function () {

			$(document).on("change", "[data-ui='attach'].aui-addFile .fileButton .fileInput", function () {
				var fUrl = (this.value).split("\\"),
					fName = fUrl[fUrl.length - 1];
				$(this).closest(".aui-addFile").find(".file .loc").val(fName);
				var locVar = $(this).closest(".aui-addFile").find(".file .loc").val();
				if (locVar) {
					$(this).closest(".aui-addFile").addClass("on");
				}
			});
			$(document).on("click", "[data-ui='attach'].aui-addFile .file .delete", function () {
				$(this).closest(".aui-addFile").find(".file .loc").val("");
				$(this).closest(".aui-addFile").find(".fileButton .fileInput").val("");
				$(this).closest(".aui-addFile").removeClass("on");
			});
			console.log('fileAttachUi');
		},
		// mark : gnb2Ui
		gnb2Ui: function () {
			var $menu = $('.aui-menu2depth > li');

			//init
			$menu.on('mouseenter focusin', function (e) {
				var $t = $(this).find('> a');

				$t.parent('li').addClass('active').siblings('li').removeClass('active');

			}).on('mouseleave foucsout', function () {
				$menu.removeClass('active');
			});
		},
		// mark : gnbAllUi
		gnbAllUi: function () {
			var $menu = $('.aui-allsub');
			var $submenu = $menu.find('> li > a');
			var h = 0;

			if ( $(window).width() <= 960 ) {
				return;
			} else{
				$menu.find('ul').each(function (index) {
					var height = this.scrollHeight;
					h = h < height ? height : h;
				});

				//init
				$submenu.on('click', function (e) {
					e.preventDefault();
				});
				$menu.on('mouseenter focusin', function (e) {
					$menu.addClass('active');
					$menu.find('ul').height(h);
				});
				$menu.on('mouseleave focusout', function (e) {
					$menu.removeClass('active');
					$menu.find('ul').height(0);
				});
				$(window).on('scroll', function(){
					$menu.removeClass('active');
					$menu.find('ul').height(0);
				});

			}


		},


		// mark: updown changeUi
		updnChgUi: function (target, elType) {
			var $target = $(target);
			var $el = elType; // div && tr

			var $up = $target.find('.aui-row-up'),
				$dn = $target.find('.aui-row-dn');

			$up.on('click', function () {
				upFunc($(this));
				console.log('up');
			});
			$dn.on('click', function () {
				dnFunc($(this));
				console.log('dn');
			});

			var upFunc = function (t) {
				var $tr = t.closest($el); // 클릭한 버튼이 속한 el 요소
				$tr.prev().before($tr); // 현재 el 의 이전 el 앞에 선택한 el 넣기
			}

			var dnFunc = function (t) {
				var $tr = t.closest($el); // 클릭한 버튼이 속한 el 요소
				$tr.next().after($tr); // 현재 el 의 다음 el 뒤에 선택한 el 넣기
			}
			console.log('updnChg');
		},


		// mark : init
		init: function () {
			// var t = this;

			// t.tabUi();
			// t.selectUi();
			// t.tooltipUi();
			// t.modalUi();
			// t.scrollUi();
			// t.accoUi();
		}

	}
	// (end) ANUI returm module


})();