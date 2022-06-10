var delimiter = '.';
$('#result').html()
    .toString()
    .replace(new RegExp("(^\\d{" + ($this.html().toString().length % 3 || -1) + "})(?=\\d{3})"), "$1" + delimiter)
    .replace(/(\d{3})(?=\d)/g, "$1" + delimiter);