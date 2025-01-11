/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
window.onload = () => {
    console.log('EcoTokens: Content script is active');
    const observeDOM = () => {
        const promptTextarea = document.querySelector('#prompt-textarea[contenteditable="true"]');
        const sendButton = document.querySelector('button[aria-label="Send prompt"]');
        const fileInput = document.querySelector('input[type="file"]');
        if (promptTextarea && sendButton) {
            console.log('EcoTokens: Found ChatGPT prompt text area and Send button.');
            if (!promptTextarea.dataset.observing) {
                promptTextarea.dataset.observing = "true";
                // Add keydown listener for Enter key
                promptTextarea.addEventListener('keydown', (event) => {
                    var _a;
                    if (event.key === 'Enter' && !event.shiftKey) {
                        const prompt = ((_a = promptTextarea.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                        console.log('Captured prompt on Enter:', prompt);
                        // Send the captured prompt to the background script
                        chrome.runtime.sendMessage({ action: 'capturePrompt', prompt });
                    }
                });
                // Add paste listener to capture pasted images or text
                promptTextarea.addEventListener('paste', (event) => {
                    const clipboardData = event.clipboardData;
                    if (clipboardData) {
                        const items = clipboardData.items;
                        for (const item of items) {
                            if (item.type.startsWith('image/')) {
                                const file = item.getAsFile();
                                if (file) {
                                    console.log('Captured pasted image:', file);
                                    // Send the captured image file to the background script
                                    chrome.runtime.sendMessage({
                                        action: 'captureImage',
                                        file: {
                                            name: file.name,
                                            type: file.type,
                                            size: file.size,
                                        },
                                    });
                                }
                            }
                        }
                    }
                });
                console.log('EcoTokens: Added listeners to the prompt text area.');
            }
            if (!sendButton.dataset.observing) {
                sendButton.dataset.observing = "true";
                // Add click listener for the Send button
                sendButton.addEventListener('click', () => {
                    var _a;
                    const prompt = ((_a = promptTextarea.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                    console.log('Captured prompt on Send click:', prompt);
                    // Send the captured prompt to the background script
                    chrome.runtime.sendMessage({ action: 'capturePrompt', prompt });
                });
                console.log('EcoTokens: Observing the Send button for clicks.');
            }
        }
        if (fileInput && !fileInput.dataset.observing) {
            fileInput.dataset.observing = "true";
            // Add change listener to capture file uploads
            fileInput.addEventListener('change', (event) => {
                const files = fileInput.files;
                if (files && files.length > 0) {
                    console.log('Captured uploaded files:', files);
                    // Collect file details and send to the background script
                    const fileDetails = Array.from(files).map((file) => ({
                        name: file.name,
                        type: file.type,
                        size: file.size,
                    }));
                    chrome.runtime.sendMessage({ action: 'captureFiles', files: fileDetails });
                }
            });
            console.log('EcoTokens: Observing the file input for uploads.');
        }
    };
    // Observe the entire document for changes to detect when #prompt-textarea, Send button, or file input are added/replaced
    const observer = new MutationObserver(observeDOM);
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('EcoTokens: Watching for dynamic changes in the DOM.');
};

/******/ })()
;
//# sourceMappingURL=contentScript.js.map