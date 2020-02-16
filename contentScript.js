function replaceText(find, replace){
    const regex = new RegExp(find, "gi");

    const contents = document.querySelectorAll('p,li,span,h1,h2,h3,h4,h5,h6');

    for(const snippet of contents){
        snippet.textContent = snippet.textContent.replace(regex, replace);
    }
}

chrome.runtime.onMessage.addListener(function(message){
    if(message.action === 'REPLACE_TEXT'){
        replaceText(message.find, message.replace);
    }
});
