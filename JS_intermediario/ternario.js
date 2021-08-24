let isValid = true;

// sem ternario
function verify(isValid) {
    if (isValid) {
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));

// com ternario
const result = isValid ? true : false;

console.log(result);