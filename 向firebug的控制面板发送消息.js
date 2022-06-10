jQuery.fn.log = function (msg) {
    console.log("%s: %o", msg, this);
    return this;
};
$('#some_div').find('li.source > input:checkbox').log("sources to uncheck").removeAttr("checked");