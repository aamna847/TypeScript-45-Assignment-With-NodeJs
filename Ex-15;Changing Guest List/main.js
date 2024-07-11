var guestlist = ["Ariba", "Aleesha", "Aleeza"];
var dontcome = guestlist[0];
console.log(dontcome, ("Not Coming"));
guestlist.splice(0, 1, "Aamna");
guestlist.forEach(function (guest) { return console.log("Salam,".concat(guest, ",\"Would u like to dinner with me?\"")); });
