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

		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',

		// 如果需要滚动条
		scrollbar: '.swiper-scrollbar',
	});
var hArr=[0,0];
	function getImg(){
		var imgArrSrc=["http://pic.qiantucdn.com/58pic/26/48/54/05S58PICyFi.jpg!/fw/300/progressive/true",
						"http://pic.qiantucdn.com/58pic/26/50/90/18C58PICxPb.jpg!/fw/300/progressive/true",
						"http://pic.qiantucdn.com/58pic/26/48/70/66q58PICgVj.jpg!/fw/300/progressive/true",
						"http://pic.qiantucdn.com/58pic/26/51/71/35b58PICGxk.jpg!/fw/300/progressive/true",
						"http://pic.qiantucdn.com/58pic/26/52/58/81M58PICNEc.jpg!/fw/300/progressive/true",
						"http://pic.qiantucdn.com/58pic/26/32/24/38U58PICrHB.jpg!/fw/300/progressive/true"	
			];
			for(var i=0;i<imgArrSrc.length;i++){
				var $img=$('<div class="pic"><a href="#"><img src="'+imgArrSrc[i]+'"></a></div>')
				var min=Math.min.apply({},hArr);
				var arrIndex=hArr.indexOf(min);
				$("#waterfall").append($img);
				hArr[arrIndex]=min+parseInt($img.height());
				$img.css({left:50*arrIndex+"%",top:min+"px"});
			}
	} 

	window.onscroll=function(){
			// console.log($("#waterfall .pic").last().height()+$(window).height()+$(window).scrollTop(),$(document).height());

			if($("#waterfall .pic").last().height()+$(window).height()+$(window).scrollTop()>=$(document).height()){
				getImg()
			}	
		}    
getImg();
})();