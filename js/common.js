/*
TO-TOP
*/
$(function(){
	$(".to_top a").click(function(){
		$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
		return false;
	})
});

$(document).ready(function() {
	var flag = false;
	var pagetop = $('.to_top');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 120) {
			if (flag == false) {
				flag = true;
				pagetop.stop().animate({
					'right': '5px'
				}, 600);
			}
		} else {
			if (flag) {
				flag = false;
				pagetop.stop().animate({
					'right': '-200px'
				}, 600);
			}
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 700);
		return false;
	});
});

/*
スムーススクロール
*/

$(function(){
$(".mokuji a").click(function(){
$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');      return false;
})
});

$(function(){
$(".menu_link_btn a").click(function(){
$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');      return false;
})
});

$(function(){
$(".menu_link_btn2 a").click(function(){
$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');      return false;
})
});


/*
ウィンドウサイズ変更ページ更新
*/
var now_width = $(window).width();
var timer = false;
$(window).resize(function() {
	if(timer !== false) {
		clearTimeout(timer);
	}
	timer = setTimeout(function() {
		after_width = $(window).width();
		if(now_width >= 640 && after_width < 640) {
			location.reload();
		} else if (now_width < 640 && after_width >= 640) {
			location.reload();
		}
	});
});

/*
スマホメニュー
*/
$(function(){
	var easing = 'easeInOutQuart',
	duration = 1000;
	//$('#gm').css( {opacity:'0'});
	$('.header_menu').click(function () {
		$('#overlay').stop().fadeIn(duration,easing);
		$('#gm_sp').stop().animate( {right:'0',opacity:'1'},duration,easing);
	});

	$('#close,#overlay').click(function () {
		$('#overlay').stop().fadeOut(duration,easing);
		$('#gm_sp').stop().animate( {right:'-100%',opacity:'0'},duration,easing);
	});
});

/*
ボックスの高さをそろえる
*/

$(window).load(function() {
	$(".height_box").tile();
});

$(window).load(function() {
	$(".table_height").tile();
});

$(window).load(function() {
	$(".table_height2").tile();
});

$(window).load(function() {
 $(".height_box").tile();
});

$(window).load(function() {
 $(".height_box2").tile();
});

$(window).load(function() {
 $(".height_box3").tile();
});
/*
タブパーツ
*/
$(function() {

$(".tab").click(function() {
$(".tab").removeClass('active');
$(this).addClass('active')

var i = $(".tab").index(this);
$(".tab_box").addClass('down');
$(".tab_box").eq(i).removeClass('down');
});
});

/*
口コミ　もっと読むボタン
*/
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
$(document).ready(function(){
  $('.text_overflow').collapser({
    mode: 'chars',
    truncate: 24,
    showText: '続きを読む',
    hideText: '閉じる'
  });
});
}

/*
目次　もっと読むボタン

$(function(){
    jQuery(document).on("click touchstart", ".txt-more-btn", function(){
		 $('.txt-more-btn').delay(300).queue(function(){
     			$(this).prev().css("height","620px");
				$(this).addClass('txt-more-btn-on');
				$(this).removeClass('txt-more-btn');
			 });
   });
})
*/

/*
ヘッダー引っ込む
*/

var menuHeight = $("#SP_NAV").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 1) {
      $("#SP_NAV").css("top", "-" + 100 + "px");
    }
  } else {
    $("#SP_NAV").css("top", 0 + "px");
  }
  startPos = currentPos;
});

$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    $("#SP_NAV").css("top", 0 + "px");
  }
});

$(function(){
	        $(".next_btn").on("click", function() {
			   $(this).closest("div.question_box").css("display","none");
			   id = $(this).attr("href");
			   $(id).addClass("q_active").fadeIn("fast");
			});
});

/*
スクロールテーブル
*/
$(function(){ 
jQuery(".scroll").bind({
    		'touchstart': function(e) {
			if($(this).children(".touch_close").is(":visible")) $(this).children(".touch_close").fadeOut();
    		},
    		'touchmove': function(e) {
    		},
    		'touchend': function(e) {
    		}
	});
})

$(function(){ 
    jQuery(document).on("click", ".touch_close", function(){
                $(this).fadeOut();
   }); 
})


/*
地域で探す　アコーディオン
*/

$(function() {

$("#MACHIKON_TOP_AREA .machikon_top_area .left_box .area_link .aco").click(function() {
$("#MACHIKON_TOP_AREA .machikon_top_area .left_box .area_link .aco").removeClass('active');
$(this).addClass('active')

$("#MACHIKON_TOP_AREA .machikon_top_area .left_box .area_link .aco").next().addClass('down');
$(this).next().removeClass('down');
});
});


