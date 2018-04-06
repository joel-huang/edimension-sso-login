var edimension = "https://edimension.sutd.edu.sg/webapps/login"; 
var saturn = "https://saturn.sutd.edu.sg/adfs/ls"

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log(tab.url);
        console.log(tab.url.indexOf(edimension));
        console.log(tab.url.indexOf(saturn));
        if (tab.url.indexOf(edimension) == 0) {
            chrome.tabs.sendMessage(tabId, {type: 'onEdimensionLogin'}, function (doc) {
                console.log(doc);
            });
        } else if (tab.url.indexOf(saturn) == 0) {
            chrome.tabs.sendMessage(tabId, {type: 'onSaturnLogin'}, function (doc) {
                console.log(doc);
            });
        }
    }
});