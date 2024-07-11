//Define a function with a rest parameter  that accepts items arguments representing our sandwich.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
;
//Call the function 3 times with 3 different no. of arguments:
makeSandwich("Chicken", "Cheese", "Mayonaise", "Egg");
makeSandwich("Butter", "Bread");
makeSandwich("Bread", "Butter", "Chicken", "Jalapeno", "onion", "tomato", "Egg", "Cheese", "Lettuce");
