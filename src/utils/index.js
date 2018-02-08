export const loadFromLocalStorage = item => {
    try {
        const serializedState = localStorage.getItem(item);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveToLocalStorage = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        // Ignore write errors.
    }
}

export const getImageUrl = (imageBase, imagePath) => {
    if (!imagePath) return null;

    return imageBase + imagePath;
};
