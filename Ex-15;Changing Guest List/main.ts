let guestlist = ["Ariba","Aleesha","Aleeza"];

let dontcome = guestlist[0];

console.log(dontcome,("Not Coming"));

guestlist.splice(0,1,"Aamna");

guestlist.forEach(guest=>console.log(`Salam,${guest},"Would u like to dinner with me?"`));