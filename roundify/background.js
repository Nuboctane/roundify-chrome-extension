//extension activated
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "main.js"});

 });

// tab auto load
 chrome.tabs.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete') {
            chrome.tabs.executeScript(null, {file: "main.js"});
    }
 });