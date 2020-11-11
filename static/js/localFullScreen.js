function requestFullScreen(element) {
　　var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
　　if (requestMethod) {
　　　　requestMethod.call(element);
　　} else if (typeof window.ActiveXObject !== "undefined") {
　　　　var wscript = new ActiveXObject("WScript.Shell");
　　　　if (wscript !== null) {
　　　　　　wscript.SendKeys("{F11}");
　　　　}
　　}
}


function exitFullscreen() {
　　if (document.exitFullscreen) {
　　　　document.exitFullscreen();
　　} else if (document.msExitFullscreen) {
　　　　document.msExitFullscreen();
　　} else if (document.mozCancelFullScreen) {
　　　　　　document.mozCancelFullScreen();
　　} else if (document.webkitExitFullscreen) {
　　　　　　document.webkitExitFullscreen();
　　}
}
