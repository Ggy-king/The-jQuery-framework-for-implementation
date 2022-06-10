jQuery.preloadImages = function () {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr('src', arguments[i]);
    }
};
//用法
$.preloadImages('image1.gif', '/path/to/image2.png', 'some/image3.jpg');