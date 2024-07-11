//array of Current Users:
var current_Users = ["Aamna", "Rafia", "Maryam", "Ali", "Zain"];
//Array of New Users:
var new_Users = ["aamna", "Rafia", "Areeba", "Aleeza", "Areesha"];
//Loop through new_Users to check for usernames to check Availability:
new_Users.forEach(function (new_one_user) {
    //Making a condition for username already exist and save in our_condition variable.
    var our_condition = (current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    //Print different messages using If-Else Statements:
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken "));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
