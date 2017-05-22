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
	$(window).scroll(function(){
		var h=$(".swiper-container").height();
		if(document.body.scrollTop>=parseInt(h)){
			$(".header").css({"backgroundColor":"rgb(229, 131, 53)"});
		}else{
			$(".header").css({"backgroundColor":"transparent"});
		}
	})
	var mySwiper = new Swiper ('.swiper-container', {
		// direction: 'vertical',
		loop: true,
		autoplay : 5000,
		// 如果需要分页器
		pagination: '.swiper-pagination',

	});

})();