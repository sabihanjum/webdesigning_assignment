let day = 5;
let dayName;
switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesda";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
        Default:
        dayName = "Invalid day";
}
console.log("The day is " + dayName);
