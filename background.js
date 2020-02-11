console.log("Background script running...");

const iconRules = [{
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'medium.com'},
        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
}];

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules(iconRules);
});

chrome.pageAction.onClicked.addListener(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "REPLACE_TEXT"});
    })
});
