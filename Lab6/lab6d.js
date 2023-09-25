function getDaysInMonth() {
    let month = document.getElementById("monthInput").value;
    let num_days;

    switch (month.toLowerCase()) {
        case "january":
            num_days = 31;
            break;
        case "february":
            num_days = 28;
            break;
        case "march":
            num_days = 31;
            break;
        case "april":
            num_days = 30;
            break;
        case "may":
            num_days = 31;
            break;
        case "june":
            num_days = 30;
            break;
        case "july":
        case "august":
            num_days = 31;
            break;
        case "september":
            num_days = 30;
            break;
        case "october":
            num_days = 31;
            break;
        case "november":
            num_days = 30;
            break;
        case "december":
            num_days = 31;
            break;
        default:
            num_days = -1;
            break;
    }

    if (num_days === -1) {
        document.getElementById("result").innerHTML = "Error: Invalid month entered.";
    } else {
        document.getElementById("result").innerHTML = `The month of ${month} has ${num_days} days.`;
    }
}