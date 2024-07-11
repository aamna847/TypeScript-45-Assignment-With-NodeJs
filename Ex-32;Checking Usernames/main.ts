//array of Current Users:
let current_Users = ["Aamna","Rafia","Maryam","Ali","Zain"];
//Array of New Users:
let new_Users = ["aamna","Rafia","Areeba","Aleeza","Areesha"];

//Loop through new_Users to check for usernames to check Availability:
new_Users.forEach(new_one_user =>{
    //Making a condition for username already exist and save in our_condition variable.
   let  our_condition= (current_Users.some(current_one_user=>current_one_user.toLowerCase()===new_one_user.toLowerCase()))
    //Print different messages using If-Else Statements:
   if(our_condition){
     console.log(`Sorry ${new_one_user} is already taken `)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
});