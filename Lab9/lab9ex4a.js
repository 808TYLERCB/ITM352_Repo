function isNonNegInt(q) {
    let errors = []; // assume no errors at first

    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return errors.length == 0; // Returns true if no errors, otherwise false
}

let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

for (let piece of pieces) {
    console.log(`Value: ${piece}, Is Non-Negative Integer: ${isNonNegInt(piece)}`);
}

