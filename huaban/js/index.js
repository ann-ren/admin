(function(){
	// document.style.fontSize=100*(window.innerWidth/640)+"px";
	$(window).resize(function(){
		// alert(1)
		document.documentElement.style.fontSize=100*(window.innerWidth/640)+"px";
		//banner
		var bannerWidth=window.innerWidth*($("#banner li").length);
		$("#banner").css({"width":bannerWidth+"px"});
		$("#banner li").css({"width":window.innerWidth+"px"});
	});
	$(window).trigger("resize");
	
	$(".searchWrap input").focus(function(){
		$("document").height($(window).height());
	})

	var mySwiper = new Swiper ('.swiper-container', {
		// direction: 'vertical',
		loop: true,
		autoplay : 5000,
		// 如果需要分页器
		pagination: '.swiper-pagination',

	});


	var startY,moveY,endY;
	$(".absShade").bind("touchstart",function(e){
		var touch=e.touches[0];
		startY=touch.pageY;
	})
	$(".absShade").bind("touchmove",function(e){
		var touch=e.touches[0];
		moveY=touch.pageY;
		endY=startY-moveY;
		$(".absShade").css({"transform":"translateY("+(-endY)+"px)"})
	})
	$(".absShade").bind("touchend",function(e){
		var winH=$(window).height();
		if(endY>winH/8){
			$(".absShade").css({"transform":"translateY("+(-winH)+"px)"});
			setTimeout(function(){
				$(".absShade").remove();
			},500)
		}else{
			$(".absShade").css({"transform":"translateY("+0+"px)"})
		}
	})
})();