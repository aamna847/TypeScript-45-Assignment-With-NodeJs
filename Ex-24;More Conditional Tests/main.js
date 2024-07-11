//Define the variable:
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Tests for equality and inequality of strings:
console.log("Is apple is equal to Apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Tests using the lower case function:
console.log("\nIs Apple  is equal to apple after converting it to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Apple  is not  equal to apple after converting it to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Tests:
//Equals To:
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not Equal to:
console.log("\n Is ten is not equal to twenty");
console.log(ten != twenty);
//Greater than:
console.log("\nIs ten is greater than zero");
console.log(ten > 0);
//Less than:
console.log("\n Is ten is smaller than zero");
console.log(ten < 0);
//Greater than or equals to:
console.log("\nIs ten is greater than or equal to five");
console.log(ten >= 5);
//Less than or equals to:
console.log("\nIs twenty is less than or equals to ten?");
console.log(twenty <= 10);
//Tests using "and" & "or"operators:
//Using && operator(and):
console.log("\ntwenty is not equals to ten and twenty is greater  than ten ");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equals to ten and twenty is greater  than ten ");
console.log(twenty != 10 && twenty > 30);
//Using || (OR) operator:
console.log("\n Twenty is greater than 50 OR twenty is equals to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n Twenty is greater than 50 OR twenty is  not equals to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include in array:
console.log("\nIs orange include in my fruits Array?");
console.log(fruits.includes("orange"));
console.log("\nIs orange is not include in my fruits Array?");
console.log(!fruits.includes("orange"));
