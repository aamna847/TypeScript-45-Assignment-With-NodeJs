//Creating a Array:
var userNames = ["Aamna", "Rafia", "Maryam", "Ali", "Admin"];
//Using ForEach Loop on Array:
userNames.forEach(function (Oneuser) {
    if (Oneuser === "Admin") {
        console.log("\nHello ".concat(Oneuser, ", Would you like to see a status report?"));
    }
    else {
        console.log("\nHello ".concat(Oneuser, ", ThankYou for logging in again."));
    }
});
