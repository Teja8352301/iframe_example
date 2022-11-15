// Save data to sessionStorage
export const setToSession = (key,value) => sessionStorage.setItem(key,value);

// Get saved data from sessionStorage
export const getFromSession = (key) => sessionStorage.getItem(key);

// Remove saved data from sessionStorage
export const removeFromSession = (key) => sessionStorage.removeItem(key);

// Remove all saved data from sessionStorage
export const clearAllFromSession = () => sessionStorage.clear();
