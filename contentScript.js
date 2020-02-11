function replaceText(){
    const FIND = "the";
    const REPLACE_WITH = "replacely";

    const regex = new RegExp(FIND, "gi");

    const contents = document.querySelectorAll('p,li,span,h1,h2,h3,h4,h5,h6');

    for(const snippet of contents){
        snippet.textContent = snippet.textContent.replace(regex, REPLACE_WITH);
    }
}

chrome.runtime.onMessage.addListener(function(message){
    if(message.action === 'REPLACE_TEXT'){
        replaceText();
    }
});
