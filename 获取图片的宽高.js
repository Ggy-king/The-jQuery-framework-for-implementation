var img = $('#imageid');
var theImage = new Image();
theImage.src = img.attr("src");
alert("Width: " + theImage.width);
alert("Height: " + theImage.height);