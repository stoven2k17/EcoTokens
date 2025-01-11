
export const saveData = (key, value) => {
    chrome.storage.local.set({ [key]: value }, () => {
        console.log(`Saved data under key: ${key}`);
    });
};

export const loadData = (key, callback) => {
    chrome.storage.local.get(key, (result) => {
        callback(result[key] || null);
    });
};

// Delete data from Chrome storage
export const deleteData = (key) => {
    chrome.storage.local.remove(key, () => {
        console.log(`Deleted data under key: ${key}`);
    });
};

// Clear all data in Chrome storage
export const clearAllData = () => {
    chrome.storage.local.clear(() => {
        console.log("All data cleared from Chrome storage.");
    });
};