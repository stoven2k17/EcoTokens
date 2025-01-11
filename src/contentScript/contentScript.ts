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

                    try {
                        // Check if extension context is still valid
                        if (chrome.runtime?.id) {
                            chrome.runtime.sendMessage({ action: 'capturePrompt', prompt })
                                .then(response => {
                                    console.log('Message sent successfully:', response);
                                })
                                .catch(error => {
                                    console.error('Error sending message:', error);
                                });
                        }
                    } catch (error) {
                        console.error('Extension context error:', error);
                    }
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

                try {
                    // Check if extension context is still valid
                    if (chrome.runtime?.id) {
                        chrome.runtime.sendMessage({ action: 'capturePrompt', prompt })
                            .then(response => {
                                console.log('Message sent successfully:', response);
                            })
                            .catch(error => {
                                console.error('Error sending message:', error);
                            });
                    }
                } catch (error) {
                    console.error('Extension context error:', error);
                }
            });

            console.log('EcoTokens: Observing the Send button for clicks.');
        }
    }
};

// Create a cleanup function for the observer
let observer: MutationObserver | null = null;

function startObserver() {
    if (observer) {
        observer.disconnect();
    }

    observer = new MutationObserver(observeDOM);
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('EcoTokens: Watching for dynamic changes in the DOM.');
}

// Start observing and handle cleanup
startObserver();

// Cleanup on unload
window.addEventListener('unload', () => {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
});