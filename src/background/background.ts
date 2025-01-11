import { saveData, loadData } from "./helper";

console.log("Background script is running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in background script:", message);
    if (message.action === 'capturePrompt') {
        console.log('Background received prompt:', message.prompt);

        // Save data to local storage
        saveData('test', message.prompt);

        // Load data asynchronously and respond
        loadData('test', (data) => {
            console.log('Loaded data from storage:', data);
            sendResponse({ success: true, data });
        });

        return true;
    }
});
