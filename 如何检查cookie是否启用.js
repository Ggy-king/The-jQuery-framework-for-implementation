var dt = new Date();
dt.setSeconds(dt.getSeconds() + 60);
document.cookie = "cookietest=1; expires=" + dt.toGMTString();
var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
if (!cookiesEnabled) {
    //没有启用cookie
}