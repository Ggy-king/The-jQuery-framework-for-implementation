// 不这样做
$('#nav li').click(function () {
    $('#nav li').removeClass('active');
    $(this).addClass('active');
});
//替代做法是
$('#nav li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});