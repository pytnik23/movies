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
    if (!imagePath || !imageBase) return null;

    return imageBase + imagePath;
};

export const formatPrice = (price) => {
    if (typeof price !== 'number') {
        throw new Error('"price" should be typeof number');
    }

    if (price < 1000) return price.toString();

    return price
    .toString()
    .split('')
    .reverse()
    .reduce((res, letter, idx) => {
        !idx || (idx % 3) ? res.push(letter) : res.push(letter + ',');
        return res;
    }, [])
    .reverse()
    .join('');
};
