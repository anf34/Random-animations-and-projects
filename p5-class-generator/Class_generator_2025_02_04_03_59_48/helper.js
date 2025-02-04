// Converts a string to snake_case
function strToSnakeCase(text) {
    if (typeof text !== 'string' || text.trim() === '') {
        throw new Error("Input must be a non-empty string.");
    }

    let result = "";
    let prevChar = null;

    for (let char of text) {
        if (/[a-zA-Z0-9]/.test(char)) { // Check if alphanumeric
            if (char === char.toUpperCase() && prevChar && prevChar.toLowerCase() === prevChar) {
                result += "_";
            }
            result += char.toLowerCase();
            prevChar = char;
        } else {
            if (prevChar !== "_") {
                result += "_";
            }
            prevChar = "_";
        }
    }
    return result.replace(/^_+|_+$/g, ""); // Trim leading/trailing underscores
}

// Checks if a string exists in a list (or inside tuples)
function isStringInList(lst, target) {
    if (typeof target !== 'string') {
        throw new TypeError("Target must be a string.");
    }
    
    return lst.some(item => {
        if (typeof item === 'string') return item === target;
        if (Array.isArray(item)) return item.includes(target);
        return false;
    });
}

// Checks if an empty string is present in the list
function checkEmptyString(lst) {
    return isStringInList(lst, "");
}

// Checks if all elements in the list are strings
function checkOnlyStrings(lst) {
    return lst.every(item => typeof item === 'string');
}

// Checks if all elements in the list are arrays (tuples equivalent)
function checkOnlyTuples(lst) {
    return lst.every(item => Array.isArray(item));
}

// Validates if the list contains only tuples and no empty strings
function validStringTuples(lst) {
    return !checkEmptyString(lst) && checkOnlyTuples(lst);
}

// Validates if the list contains only strings and no empty strings
function validStringList(lst) {
    return checkOnlyStrings(lst) && !checkEmptyString(lst);
}

// Converts camelCase to snake_case
function camelToSnake(camelCaseStr) {
    return camelCaseStr.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}


