jQuery.fn.autoscroll = function (selector) {
    $('html,body').animate(
        { scrollTop: $(selector).offset().top },
        500
    );
}
//然后像这样来滚动到你希望去到的class/area上。
$('.area_name').autoscroll();