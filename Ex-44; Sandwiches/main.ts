//Define a function with a rest parameter  that accepts items arguments representing our sandwich.
function makeSandwich(...items:string[]){
         console.log("\n Making a sandwich with following items: \n");
         items.forEach(singleItem => console.log(singleItem));
         console.log("\nNow Enjoy Sandwich")
};
//Call the function 3 times with 3 different no. of arguments:
makeSandwich("Chicken","Cheese","Mayonaise","Egg");
makeSandwich("Butter","Bread");
makeSandwich("Bread","Butter","Chicken","Jalapeno","onion","tomato","Egg","Cheese","Lettuce");