//Define the function to show magician names:
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//Function to make magicians The Great through .map() it will modify array:
function make_great(magicians:string[]){
 return magicians.map(name => `The Great ${name}`)
}
//Define an array of magician names:
let magician_names=["Ali","Harry","Usman"];
//Making a copy of original array through .slice()function:
let copy_magician_names = magician_names.slice()
//Modify the copied array to include "The Great" with their names:
let copy_great_magicians=make_great(copy_magician_names);
//Show both arrays copied and original:
//Original:
show_magicians(magician_names);
//Copied:
