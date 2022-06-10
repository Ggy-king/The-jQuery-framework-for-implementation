jQuery.fn.center = function () {
    this.css('position', 'absolute');
    this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
    this.css('left', ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + 'px');
    return this;
}
//这样来使用上面的函数：
$(element).center();