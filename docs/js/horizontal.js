$(function() {
	// 閾値
	const THRESHOLD = 500;
	// 表示領域
	const clientArea = $(window);
	// 表示領域の横幅が閾値を上回る場合、横長表示形式へ
	clientArea.on('load resize orientationchange', function() {
		if (clientArea.width() > THRESHOLD) {
			$('.flex-container').css('height', clientArea.height());
		} else {
			$('.flex-container').css('height', '');
		}
	});
	// コンテンツの横幅
	const cont = $('#contents');
	const contW = $('.section').outerWidth(true) * $('div', cont).length;
	cont.css('width', contW);
	// スクロール速度
	const speed = 50;
	// 横長表示形式時、マウスホイールで水平移動
	$('html').mousewheel(function(event, mov) {
		if (clientArea.width() > THRESHOLD) {
			// ie firefox
			$(this).scrollLeft($(this).scrollLeft() - mov * speed);
			// webkit
			$('body').scrollLeft($('body').scrollLeft() - mov * speed);
			return false;   // 垂直スクロール不可
		}
	});
});
