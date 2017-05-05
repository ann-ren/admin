
$.fn.scroll_turn=function(opt){
  var parent=$(this).attr("class");
  var last=opt.last;
  var next=opt.next;
  var width=parseInt($(this).width());
  var maxWidth=parseInt(opt.maxWidth);
  var $this=$(this);
  var childList=opt.childList;
  $(this).data("curIndex",0);
 
  $(childList).click(function(){
    var index=$(this).index();
    $(this).parent().siblings("."+parent).data("curIndex",index);
    opt.indexCallback($(this));
    $(this).parent().siblings("."+parent).animate({scrollLeft:$(this).parent().siblings("."+parent).data("curIndex")*width});
  })
  $(last).click(function(){
    if($(this).siblings("."+parent).scrollLeft()==0){   
      return;
    }

    
    $(this).siblings("."+parent).data("curIndex",$(this).siblings("."+parent).data("curIndex")-1);
    // opt.lastCallback&&opt.lastCallback($(this).siblings("."+parent).data("curIndex"));
    $(this).siblings("."+parent).animate({"scrollLeft":"-="+width});
    $(this).siblings(".btn_wrap").find("span").eq($(this).siblings("."+parent).data("curIndex")).addClass("btn_on").siblings().removeClass("btn_on");
  })
  $(next).click(function(){
    if($(this).siblings("."+parent).scrollLeft()+width>=maxWidth){
      return;
    }  
    $(this).siblings("."+parent).data("curIndex",$(this).siblings("."+parent).data("curIndex")+1);
    
    $(this).siblings("."+parent).animate({"scrollLeft":"+="+width});

    $(this).siblings(".btn_wrap").find("span").eq($(this).siblings("."+parent).data("curIndex")).addClass("btn_on").siblings().removeClass("btn_on");
  })
}