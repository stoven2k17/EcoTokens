import { saveData, loadData } from "./helper";

console.log("Background script is running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Extension installed and background script is running!");
    if (message.action === 'capturePrompt') {
        console.log('Background received prompt:', message.prompt);
        
        saveData('test', message.prompt);
        
        // Load and send response back
        loadData('test', (data) => {
            sendResponse({ success: true, data: data });
        });

        // Return true to indicate we will send a response asynchronously
        return true;
    }
});