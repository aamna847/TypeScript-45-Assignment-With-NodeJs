var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making An array of countries in its original order.
var countriesToVisit = ["Saudia Arabia", "Turkey", "London", "Paris", "Switzerland"];
//Print the array in its original order.
console.log("Original Array", countriesToVisit);
//Print your new array in alphabetical order without changing the previous array.and these three dots means that this will not change the Original Array.
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that your array is in its original order by printing it.
console.log("Still in its original order", countriesToVisit);
//Reversed order main print krengy.
console.log("Reversed order", __spreadArray([], countriesToVisit, true).reverse());
//Print your array by showing it again that it is in original order.
console.log("Still in its original order", countriesToVisit);
//We have changed the original Array order now.
console.log("Original Array Reversed:", countriesToVisit.reverse());
//Print the array to show that it's back in its original order.
console.log("Back to Original Order:", countriesToVisit.reverse());
//Print the array to show that its back in its alphabetical order.
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//We have changed again the array in its original array order again.
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
