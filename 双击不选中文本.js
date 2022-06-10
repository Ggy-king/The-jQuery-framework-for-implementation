var clearSelection = function () {
    if (document.selection && document.selection.empty) {
        document.selection.empty();
    } else if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}

$(element).bind('dblclick', function (event) {
    clearSelection();
});