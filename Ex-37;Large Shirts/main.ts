//Making a function:
function make_shirt(size:string="Large",printMessage:string="I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt.`);
}
//Calling a Function by-default values:
make_shirt(); 

//Calling a function now with Medium size and default message:
make_shirt("Medium");

//Calling a function now with Small size and print different message:
make_shirt("Small","Dreams come true");
