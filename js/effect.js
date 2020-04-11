$(document).ready(function () {
	//主視覺動畫
	$('.main-foot').addClass('main-foot-effect');
	$('.main-title').addClass('main-title-effect');
	$('.main-bg-line-l').addClass('main-bg-line-effect').css('animation', 'bg-animation-l 90s 1s linear infinite');
	$('.main-bg-line-r').addClass('main-bg-line-effect').css('animation', 'bg-animation-r 90s 1s linear infinite');
	//點擊事件
	$('.menu-btn').click(function (event) {
		$(this).toggleClass('menu-btn-change')
		if ($(this).hasClass('menu-btn-change')) {
			//選單按鈕動畫
			$('.menu-btn-top').css('transition', 'top 0.5s 0s ,transform 0.5s 0s').addClass('menu-btn-top-effect');
			$('.menu-btn-middle').css('transition', 'bottom 0.25s 0.25s ,transform 0.25s 0s').addClass('menu-btn-middle-effect');
			$('.menu-btn-bottom').css('transition', 'bottom 0.5s 0s ,transform 0.5s 0s').addClass('menu-btn-bottom-effect');
			//選選開啟
			$('.menu').addClass('menu-open')
		} else {
			//選單按鈕動畫
			$('.menu-btn-top').css('transition', 'top 0.5s 0.5s ,transform 0.5s 0s').removeClass('menu-btn-top-effect');
			$('.menu-btn-middle').css('transition', 'bottom 0.5s 0.25s ,transform 0.5s 0.25s').removeClass('menu-btn-middle-effect');
			$('.menu-btn-bottom').css('transition', 'bottom 0.5s 0.5s ,transform 0.5s 0s').removeClass('menu-btn-bottom-effect');
			//選單關閉
			$('.menu').removeClass('menu-open')
		}
	});
	//滾動到對應位置
	$('.menu-list-btn').click(function (event) {
		//抓出每個連結的距離
		var SrollTop = $($(this).attr('href')).offset().top;
		$('.menu-list-btn').removeClass('menu-list-active');
		$(this).addClass('menu-list-active');
		$('html,body').animate({ scrollTop: SrollTop, }, 1000);
		$('.menu-btn').removeClass('menu-btn-change');
		$('.menu').removeClass('menu-open');
		$('.menu-btn-top').css('transition', 'top 0.5s 0.5s ,transform 0.5s 0s').removeClass('menu-btn-top-effect');
		$('.menu-btn-middle').css('transition', 'bottom 0.5s 0.25s ,transform 0.5s 0.25s').removeClass('menu-btn-middle-effect');
		$('.menu-btn-bottom').css('transition', 'bottom 0.5s 0.5s ,transform 0.5s 0s').removeClass('menu-btn-bottom-effect');
	});
	//回到頂端
	$('.to-top').click(function (event) {
		var SrollTop = $($(this).attr('href')).offset().top;
		$('html,body').animate({ scrollTop: SrollTop, }, 1000);
	});
	//取消功能
	$('.none').click(function (event) {
		return false;
	});

	//滾輪事件
	$(window).scroll(function (event) {
		var SiteTop = $('#area-site').offset().top;
		var OthersPos = $('.others').offset().top;
		var WindowHei = $(window).height();
		var WindowScr = $(window).scrollTop();
		//背景滾動效果
		$('.foot-bg-l').css('background-position-y', WindowScr * -0.05 + 50);
		$('.foot-bg-r').css('background-position-y', WindowScr *  0.05 - 50);
		//判斷header的位置
		if (WindowScr > OthersPos) {
			$('.main-area-link-btn,.menu-btn-text').css('color', 'rgb(245 ,245 ,245)');
			$('.main-area-line').css('background-color', 'rgb(245, 245, 245)');
			$('.menu-btn-area').css('border', '2px solid rgb(245, 245, 245)');
		} else {
			$('.main-area-link-btn,.menu-btn-text').css('color', 'rgb(50, 50, 50)');
			$('.main-area-line').css('background-color', 'rgb(50, 50, 50)');
			$('.menu-btn-area').css('border', '2px solid rgb(150, 150, 150)');
		}
		//卷軸動畫
		$('.scroll').each(function () {
			var SrollPos = $(this).offset().top;
			if (WindowScr + WindowHei >= SrollPos) {
				$(this).addClass('scroll-effect');
			} else {
				$(this).removeClass('scroll-effect');
			}
		});
		$('.supplies-items-item').each(function () {
			var SuppliesPos = $(this).offset().top;
			if (WindowScr + WindowHei >= SuppliesPos) {
				$(this).children('img').addClass('rubberBand');
			} else {
				$(this).children('img').removeClass('rubberBand');
			}
		});
		//其他資訊背景移動果
		$('.others-bg').css('background-position-x', WindowScr * 0.5);
	});

	//hover事件
	$('.menu-list-btn').eq(0).hover(function () {
		$(this).text('鬥陣趴趴躁');
	}, function () {
		$(this).text('全民瘋路跑');
	});
	$('.menu-list-btn').eq(1).hover(function () {
		$(this).text('揪團來齊跑');
	}, function () {
		$(this).text('好膽就來躁');
	});
	$('.menu-list-btn').eq(2).hover(function () {
		$(this).text('沿途景色好');
	}, function () {
		$(this).text('哪裡趴趴躁');
	});
	$('.menu-list-btn').eq(3).hover(function () {
		$(this).text('顏質高的好');
	}, function () {
		$(this).text('趴趴躁領跑');
	});
	$('.menu-list-btn').eq(4).hover(function () {
		$(this).text('回家很好睡');
	}, function () {
		$(this).text('趴趴躁不累');
	});
	$('.menu-list-btn').eq(5).hover(function () {
		$(this).text('好禮好心情');
	}, function () {
		$(this).text('成就大獎品');
	});
	$('.menu-list-btn').eq(6).hover(function () {
		$(this).text('人人都夠格');
	}, function () {
		$(this).text('趴趴躁資格');
	});

	//視窗重置
	$(window).resize(function (event) {
		var WindowHei = $(window).height();
		var WindowWid = $(window).width();
		if (WindowHei < 500 && WindowWid < 767) {
			$('.main-tablet-bottom').css('display', 'none');
		}
	});

	//領跑人介紹詞
	$('.playar-img').children('.owl-dots').children('.owl-dot:nth-child(1)').html('沒跑受不了-閔晨');
	$('.playar-img').children('.owl-dots').children('.owl-dot:nth-child(2)').html('沒跑瘦不了-呂萱');
	$('.playar-img').children('.owl-dots').children('.owl-dot:nth-child(3)').html('一跑就鐵腿-語兒');
});