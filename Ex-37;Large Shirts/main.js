//Making a function:
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt."));
}
//Calling a Function by-default values:
make_shirt();
//Calling a function now with Medium size and default message:
make_shirt("Medium");
//Calling a function now with Small size and print different message:
make_shirt("Small", "Dreams come true");
