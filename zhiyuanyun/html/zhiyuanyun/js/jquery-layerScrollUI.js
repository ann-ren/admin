/*
* 功能：图片各种轮播效果
* 创建日期：2012-06-28
* 修改日期：2012-10-12
* 创建人：j+2
*/

(function ($) {
    $.fn.layerScrollUI = function (option) {
        var opt = {
            outerbox: "#outerbox",
            btn: "#controllerbtn",
            leftbtn: "#leftbtn",
            rightbtn: "#rightbtn",
            txt: "#linktext",
            inTime: 1000,
            inEasing: "linear",
            outTime: 1000,
            outEasing : "linear",
            delay: "5000",
            currentStyle: "current",
			sideStyle:"current",
            title: "title",
            dir: "fade",
            event: "click",
            hastxt: false,
            hasbtn:true
        }
        $.extend(opt, option);
        // 判断滚动层个数与按钮个数是否一致
        var
            $btn = $(opt.btn),
            $leftbtn = $(opt.leftbtn),
            $rightbtn = $(opt.rightbtn),
            $this = $(this),adTimer,
			index = left = 0,
			len = $(this).children().length, // 图片数量
			adWidth = $(this).parent().width(), //图片宽度
			adHeight = $(this).parent().height(); //图片高度

        if (len != $btn.children().length) { alert("在 id " + $scrollbox + " 处，请注意，图片个数，与控制按钮不一致") }
        if (len <= 1) return false;
        //默认参数
        //按钮控制
        $btn.children()[opt.event](function () {
            index = $(this).index();
            showImg(index);
        }).eq(0)[opt.event]();

        //停止与继续
        $(opt.outerbox).hover(function () {
            clearInterval(adTimer);
        }, function () {
            clearInterval(adTimer);
            adTimer = setInterval(function () {
                index++;
                if (index == len) index = 0;
                showImg(index);
            }, opt.delay);
        }).trigger("mouseout");

        //右边按钮控制
        $rightbtn.click(function () {
            index++;
            if (index == len) index = 0;
            showImg(index);
        });
        //左边按钮控制
        $leftbtn.click(function () {
            index--;
            if (index < 0) index = len - 1;
            showImg(index);
        });
        
        hoverStyle($leftbtn);
        hoverStyle($rightbtn);

        function hoverStyle(elem) {
            $(elem).hover(function () {
                $(this).addClass(opt.sideStyle);
            }, function () {
                $(this).removeClass(opt.sideStyle);
            })
        }
        
        function showImg(index) {
            switch (opt.dir) {
                case "left": //向左滑动
                    $this.stop(true, false).animate({ left: -adWidth * index }, opt.inTime, opt.inEasing);
                    break;
                case "top": //向上滑动
                    $this.stop(true, false).animate({ top: -adHeight * index }, opt.inTime, opt.inEasing);
                    break;
                case "fade": //淡隐淡出
                    $this.css("position") === "static" && $this.css({ "position": "relative", "z-index": 0 });
                    $this.children().css({ "position": "absolute", "left": 0, "top": 0, "z-index": 0 }).eq(index).css("z-index", 10).stop(true, true).fadeIn({ duration: opt.inTime, easing: opt.inEasing }).siblings().fadeOut({ duration: opt.outTime, easing: opt.outEasing });
                    break;
                case "opacity": //淡隐淡出
                    $this.css("position") === "static" && $this.css({ "position": "relative", "z-index": 0 });
                    $this.children().css({ "position": "absolute", "left": 0, "top": 0, "z-index": 0 }).eq(index).css("z-index", 10)
                    .stop(true, false).animate({ "opacity": "1" }, opt.inTime,opt.inEasing).siblings().animate({ "opacity": "0" }, opt.outTime,opt.outEasing);
                    break;
                default: //显示隐藏
                    $this.children().eq(index).show().siblings().hide();
                    break;
            }
            if (opt.hasbtn)
                $btn.children().eq(index).addClass(opt.currentStyle).siblings().removeClass(opt.currentStyle);
            //传递 txt 与 href
            if (opt.hastxt)
                $(opt.txt).text($this.children().eq(index).find("img").attr(opt.title)).attr("href", $this.children().eq(index).attr("href"));
        }
    }
})(jQuery)
