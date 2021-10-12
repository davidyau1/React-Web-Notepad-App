function getItem(key, defaultValue) {
    let value = localStorage.getItem(key);
    if (value) {
        value = JSON.parse(value);
        return value;
    }
    return defaultValue;
}

function setItem(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

function removeItem(key) {
    localStorage.removeItem(key);
}

export const Storage = { getItem, setItem, removeItem };

