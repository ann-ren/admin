(function(){
	var nowIndex=0,newIndex,isLoop=true,
	len_1=$("#banner_wrap .banner").length-1;
	$("#banner_wrap .banner").eq(nowIndex).show().siblings().width(0).hide();
	//切换上一张图片
  $("#skip_last").click(function(){
  	newIndex=nowIndex-1<0?len_1:nowIndex-1;
  	isLoop=false;
  	switchBanner(nowIndex,newIndex,isLoop);
  	
  })
  //切换到下一张图片
  $("#skip_next").click(function(){
  	newIndex=nowIndex+1>len_1?0:nowIndex+1;
  	isLoop=false;
  	switchBanner(nowIndex,newIndex,isLoop);	
  });
  $("#banner_btn span").click(function(){
  	var index=$(this).index();
  	switchBanner(nowIndex,index);
  	isLoop=false;
  })

  function switchBanner(now_Index,new_Index,is_loop){
  	
  	$("#banner_btn span").eq(new_Index).addClass("banner_btn_click").siblings().removeClass("banner_btn_click");	
  	$("#banner_wrap .banner").stop(true,true).eq(now_Index).animate({"width":0},function(){
  		$(this).hide();
  	});
  	$("#banner_wrap .banner").eq(new_Index).show().animate({"width":"1200px"},function(){
  		isLoop=true;
  	});
  	nowIndex=new_Index;
  }
  //间歇调用
  function LoopBanner(){ 	
  		setTimeout(function(){ 		
  			if(isLoop){
  				newIndex=nowIndex+1>len_1?0:nowIndex+1;
		  		switchBanner(nowIndex,newIndex);
		  		LoopBanner();
  			}	  		
	  	},4000)
  		
  };
  setTimeout(function(){LoopBanner();},4000)

  //scroll
  $(window).scroll(function(){
  	if($(window).scrollTop()>40){
  		$("#header_bottom").addClass("fixed_head");
  		$("#head_nav").hide();
  		$("#fixed_form_wrap").show();
  	}else{
  		$("#header_bottom").removeClass("fixed_head");
  		$("#head_nav").show();
  		$("#fixed_form_wrap").hide();
  	}
  })

  //站内公告
  $("#about_design_wrap .tit").mouseover(function(){
  	var idVal=$(this).attr("id");
  	$("#about_design_wrap").find("#"+idVal+"_wrap").show().siblings().not(".tit_wrap").hide();
  });

  //图片懒加载
  $(window).scroll(function(){
  	$(".img_list_slide_wrap img").each(function(){

  		if($(this).offset().top+200<=$(window).height()+$(document).scrollTop()){
  			if($(this).attr("data_img")){
		  		$(this).attr("src",$(this).attr("data_img"));
		  		$(this).removeAttr("data_img");
  		
		  	}
  		}
 	 })
  })
 })()