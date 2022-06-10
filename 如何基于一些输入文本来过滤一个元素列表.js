//如果元素的值和输入的文本相匹配的话
//该元素将被返回
$('.someClass').filter(function () {
    return $(this).attr('value') == $('input#someId').val();
})