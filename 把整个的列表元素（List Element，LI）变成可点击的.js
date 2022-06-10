// 把整个的列表元素（List Element，LI）变成可点击的

$("ul li").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

$("ul li").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});