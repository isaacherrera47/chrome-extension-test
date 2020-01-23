const myGenericClick = (info, tab) => {
    console.log('Clicked on page:', info, tab);
};

const myImageClick = (info, tab) => {
    console.log('Clicked an image: ', tab, info);
};

chrome.contextMenus.create({
    title: "Share",
    contexts: ['page'],
    onclick: myGenericClick
});

chrome.contextMenus.create({
    title: "Share image",
    contexts: ['image'],
    onclick: myImageClick
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => console.log(msg));