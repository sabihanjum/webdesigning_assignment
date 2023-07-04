let units = 600;
let chatge;
if (units <= 200) {
    charge = "10 Rs per unit"
}
else if (units <= 400) {
    charge = "20 Rs per unit"
}
else {
    charge = "25 Rs per unit"
}
console.log("The charge is " + charge);