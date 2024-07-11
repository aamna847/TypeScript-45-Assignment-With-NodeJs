var userNames = ["Aamna", "Rafia", "Maryam", "Ali", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty!We need to find some users.");
}
else {
    //Using ForEach Loop on Array:
    userNames.forEach(function (Oneuser) {
        if (Oneuser === "Admin") {
            console.log("\nHello ".concat(Oneuser, ", Would you like to see a status report?"));
        }
        else {
            console.log("\nHello ".concat(Oneuser, ", ThankYou for logging in again."));
        }
    });
}
