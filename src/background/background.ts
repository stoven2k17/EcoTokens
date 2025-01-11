chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'capturePrompt') {
        console.log('Background received prompt:', message.prompt);
    } else if (message.action === 'captureFiles') {
        console.log('Background received files:', message.files);
    } else if (message.action === 'captureImage') {
        console.log('Background received pasted image:', message.file);
    }
});
