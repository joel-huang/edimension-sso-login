console.log("edim checker running");

chrome.extension.onMessage.addListener(function(request, sender, response) {
    if (request.type === "onEdimensionLogin") {
        doEdimensionLogin();
    }
    return true;
});

function doEdimensionLogin() {
    window.location.href = document.getElementById("loginRedirectProviderList").childNodes[1].childNodes[0].href;
}