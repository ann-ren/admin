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
	
	var mySwiper = new Swiper ('.swiper-container', {
		// direction: 'vertical',
		loop: true,
		autoplay : 5000,
		// 如果需要分页器
		pagination: '.swiper-pagination',

	});

})();