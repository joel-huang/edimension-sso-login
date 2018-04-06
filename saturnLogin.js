console.log("sat checker running");

// press enter
var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

chrome.extension.onMessage.addListener(function(request, sender, response) {
    if (request.type === "onSaturnLogin") {
        doSSOLogin();
    }
    return true;
});

keyboardEvent[initMethod](
                   "keydown", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    37, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);

function doSSOLogin(tabId) {
    document.getElementById("userNameInput").value = document.getElementById("userNameInput").value;
    document.getElementById("passwordInput").value = document.getElementById("passwordInput").value;
    setTimeout(function() {
        document.getElementById("submitButton").click();
    }, 500);
}