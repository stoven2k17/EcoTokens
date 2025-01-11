const observeDOM = () => {
    const promptTextarea = document.querySelector<HTMLDivElement>('#prompt-textarea[contenteditable="true"]');
    const sendButton = document.querySelector<HTMLButtonElement>('button[aria-label="Send prompt"]');

    if (promptTextarea && sendButton) {
        console.log('EcoTokens: Found ChatGPT prompt text area and Send button.');

        if (!promptTextarea.dataset.observing) {
            promptTextarea.dataset.observing = "true";

            // Add keydown listener for Enter key
            promptTextarea.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                    const prompt = promptTextarea.textContent?.trim() || '';
                    console.log('Captured prompt on Enter:', prompt);

                    chrome.runtime.sendMessage({ action: 'capturePrompt', prompt }, (response) => {
                        if (chrome.runtime.lastError) {
                            console.error('Error sending message:', chrome.runtime.lastError);
                            return;
                        }
                        console.log('Message sent successfully:', response);
                    });
                }
            });

            console.log('EcoTokens: Added keydown listener to the prompt text area.');
        }

        if (!sendButton.dataset.observing) {
            sendButton.dataset.observing = "true";

            // Add click listener for the Send button
            sendButton.addEventListener('click', () => {
                const prompt = promptTextarea.textContent?.trim() || '';
                console.log('Captured prompt on Send click:', prompt);

                // Send the captured prompt to the background script
                chrome.runtime.sendMessage({ action: 'capturePrompt', prompt }, (response) => {
                    if (chrome.runtime.lastError) {
                        console.error('Error sending message:', chrome.runtime.lastError);
                        return;
                    }
                    console.log('Message sent successfully:', response);
                });
            });

            console.log('EcoTokens: Observing the Send button for clicks.');
        }
    }
};

// Observe the entire document for changes to detect when #prompt-textarea and Send button are added or replaced
const observer = new MutationObserver(observeDOM);
observer.observe(document.body, { childList: true, subtree: true });

console.log('EcoTokens: Watching for dynamic changes in the DOM.');

