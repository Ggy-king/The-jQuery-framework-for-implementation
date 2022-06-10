var req = $.ajax({
    type: "POST",
    url: "someurl",
    data: "id=1",
success: function () {

    }
});
//取消ajax请求
req.abort()