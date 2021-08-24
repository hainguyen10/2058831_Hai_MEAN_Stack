let readline= require("readline-sync");
let fs = require("fs");
debugger;
let allRecords= []
//1 Take input from the user like firstname, lastname, gender, and email.
function getUserInput(){
    let iD = readline.questionInt("Enter the ID: ");
    let fname = readline.question("Enter your First name: ");
    let lname = readline.question("Enter your Last name: ");
    let gen = readline.question("Enter your Gender: ");
    let salaryAnual = readline.questionFloat("Enter the Salary: ");
    let emailId = readline.questionEMail("Enter your Email ID: ");
    var timestamp = Date.now();
    var formatDateTime= new Date(timestamp)
    let record = {Emp_ID:iD,Firstname:fname,
        Lastname:lname,
        Gender: gen,
        Salary: salaryAnual,Emp_Email: emailId,DateStored: formatDateTime};
    allRecords.push(record);
    return allRecords;
}
function main(){
    debugger;
    //2 Store the inputs in the json file along with date and time of storing.
    allRecords = getUserInput();
    let recordString = JSON.stringify(allRecords);
    fs.writeFileSync("record_log.json",recordString);
    let userInput = readline.question("Do you want to Enter another input? (y/n) ");
    while(userInput=='y'){
        if(userInput=='y'){
            recordString = JSON.parse(fs.readFileSync("record_log.json").toString());
            allRecords = getUserInput();
            recordString = JSON.stringify(allRecords);
            fs.writeFileSync("record_log.json",recordString);
            userInput = readline.question("Do you want to Enter another input? (y/n) ");
        }else{}   
    }
    console.log("Data Stored Complete!")
    
}
main()

