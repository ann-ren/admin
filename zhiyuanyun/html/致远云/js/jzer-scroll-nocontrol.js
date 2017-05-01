/*
 * function：图片无间隙滚动（利用 scrollLeft 实现）
 *
 * author：j+2
 *
 * date：2013-05-02
 */

var LayerScroll = function (option) {
    // ------------------------------ default option
    var opt = {
        hide: "hideLayer",
        list: "listLayer",
        speed: 1,
        time: 20
    }
    // ------------------------------ set option
    for (var i in option) opt[i] = option[i];

    // ------------------------------ id
    var $hide = document.getElementById(opt.hide),
        $list = document.getElementById(opt.list);

    // ------------------------------ judge
    LayerScroll.addFloat($list, "left");
    $list.parentNode.className += " clearfix";

    var listw = $list.clientWidth;

    if (listw < $hide.clientWidth) return false;

    // ------------------------------ copy html
    var $o = document.createElement($list.tagName)
    $list.parentNode.appendChild($o).innerHTML = $list.innerHTML;

    $hide.scrollLeft = 0;
    // ------------------------------ add style
    LayerScroll.addFloat($o, "left");

    var clearTime;
    // ------------------------------
    var scroll = function () {
        clearTime = setInterval(function () {
            $hide.scrollLeft += opt.speed;
            var nleft = $hide.scrollLeft;
            if (listw - nleft <= 0) $hide.scrollLeft = 0;
        }, opt.time)
    }
    scroll();
    $hide.onmouseover = function () { clearInterval(clearTime) }
    $hide.onmouseout = function () { scroll() }

}

LayerScroll.addFloat = function(o,value){
    document.all ? o.style.styleFloat = value : o.style.cssFloat = value;
}

LayerScroll();