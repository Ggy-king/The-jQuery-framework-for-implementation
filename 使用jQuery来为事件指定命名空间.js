//事件可以这样绑定命名空间
$('input').bind('blur.validation', function (e) {
    // ...
});
//data方法也接受命名空间
$('input').data('validation.isValid', true);