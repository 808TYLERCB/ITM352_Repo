/**
 * Determines if the provided value represents a non-negative integer.
 *
 * @param {string} valueToCheck - The string value to validate.
 * @param {boolean} [returnErrors=false] - Optional. If true, the function returns an array of validation errors; otherwise, it returns a boolean indicating the validity.
 * @returns {boolean | Array} - Returns true if the value is a valid non-negative integer, false or an array of errors otherwise.
 */
function isNonNegativeInteger(valueToCheck, returnErrors=false) {
    let errors = []; 

    if (Number(valueToCheck) != valueToCheck) errors.push('Not a number!');
    if (valueToCheck < 0) errors.push('Negative value!');
    if (parseInt(valueToCheck) != valueToCheck) errors.push('Not an integer!');

    return returnErrors ? errors : (errors.length == 0);
}

let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>;5";
let pieces = attributes.split(";");

for (let piece of pieces) {
    let validationResult = isNonNegInt(piece, true);
    if (Array.isArray(validationResult) && validationResult.length > 0) { 
        console.log(`Value: ${piece}, Errors: ${validationResult.join(", ")}`);
    } else {
        console.log(`Value: ${piece}, Is Non-Negative Integer: true`);
    }
}