//Making An array of countries in its original order.
let countriesToVisit:string[] = ["Saudia Arabia","Turkey","London","Paris","Switzerland"];
//Print the array in its original order.
console.log("Original Array",countriesToVisit);
//Print your new array in alphabetical order without changing the previous array.and these three dots means that this will not change the Original Array.
console.log("Alphabetical Order:",[...countriesToVisit].sort());
//Show that your array is in its original order by printing it.
console.log("Still in its original order",countriesToVisit);
//Reversed order main print krengy.
console.log("Reversed order",[...countriesToVisit].reverse());
//Print your array by showing it again that it is in original order.
console.log("Still in its original order",countriesToVisit);
//We have changed the original Array order now.
console.log("Original Array Reversed:", countriesToVisit.reverse());
//Print the array to show that it's back in its original order.
console.log("Back to Original Order:",countriesToVisit.reverse());
//Print the array to show that its back in its alphabetical order.
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());
//We have changed again the array in its original array order again.
console.log("Original Array Reversed Again:", countriesToVisit.reverse());

