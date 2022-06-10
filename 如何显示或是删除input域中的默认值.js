//这段代码展示了在用户未输入值时，
//如何在文本类型的input域中保留
//一个默认值
wap_val = [];
$(".swap").each(function (i) {
    wap_val[i] = $(this).val();
    $(this).focusin(function () {
        if ($(this).val() == wap_val[i]) {
            $(this).val("");
        }
    }).focusout(function () {
        if ($.trim($(this).val()) == "") {
            $(this).val(wap_val[i]);
        }
    });
});
<input type="text" value="Enter Username here.." class="swap" />