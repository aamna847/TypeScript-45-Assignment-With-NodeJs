//Creating a guest list array
var guestlist = ["Areeba", "Aleesha", "Aleeza"];
//Making variable for those guest who cant come.
var dontcome = guestlist[0];
//Print the guest name who cant come.
console.log(dontcome, "Not coming");
//splice function is used for add or remove values from guestlist array.
guestlist.splice(0, 1, "Aamna");
//here we print the message of bigger table.
console.log("GoodNews! We have found a bigger table for dinner");
//unshift function is used for add a guest in the starting level of index array.
guestlist.unshift("Ali");
//adding a guest at the end of the array.
guestlist.push("Zain");
//get a middle index of our guest list array.
var middleIndex = (guestlist.length / 2);
//adding a new guest to th emiddle index of the array.
guestlist.splice(middleIndex, 0, "Rizwana");
//Print a meesage of updated list.
console.log("Updated list of our guests");
//Sending an invitation mesage to oure guests.
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",Would you like to dinner with me?")); });
//we are inviting just two guests for the dinner.
console.log("The new table wont arrived at the time, so i can only invite two guests to dinner with me");
//pop function removes the person from last of the guestlist array one by one.
//using while loop for removing the guests from the guestlist array.//>greater than 2.
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("Sorry,".concat(removedguest, " I cant invite you to dinner."));
}
//Invitation  to the last two guests.
console.log("Congratulations! You are still invited");
guestlist.forEach(function (lastTwo) { return console.log("Luckily! ".concat(lastTwo, " You are invited to the dinner.")); });
//Removing the last two guests from the guestlist array.
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
