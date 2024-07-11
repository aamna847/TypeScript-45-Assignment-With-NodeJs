//Creating a Array:
let userNames=["Aamna","Rafia","Maryam","Ali","Admin"]; 

//Using ForEach Loop on Array:
userNames.forEach(Oneuser=>{
    if(Oneuser==="Admin"){
        console.log(`\nHello ${Oneuser}, Would you like to see a status report?`)
    }
    else{
        console.log(`\nHello ${Oneuser}, ThankYou for logging in again.`)
    }
})