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
