var allEntries =[];
function storeData() {
    // take value from text field using id or name
    //we can store json object. but we have to convert 
    // into string.
    var clientName = document.getElementById("client").value;
    var proName = document.getElementById("project").value;
    var budget = document.getElementById("budget").value;
    let emp = {client_Name:clientName,proname:proName,budgetMoney:budget};
    //sessionStorage.setItem("empObj",JSON.stringify(emp));
    allEntries.push(emp);
    sessionStorage.setItem("allEntries", JSON.stringify(allEntries));
    console.log(allEntries);
    //console.log("Data store in session and local storage");
}
function displayData(){
    let empObj = sessionStorage.getItem("allEntries");
    let empJson = JSON.parse(empObj)
    var sumTotal = 0;
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
    //Add the header row.
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Client Name";
    cell2.innerHTML = "Project Name";
    cell3.innerHTML = "Budget";
    for (var i = 0; i < empJson.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = empJson[i].client_Name;
        cell2.innerHTML = empJson[i].proname;
        cell3.innerHTML = empJson[i].budgetMoney;
        //Calculate the budget sum
        sumTotal += parseInt(empJson[i].budgetMoney);
    }
    var rowBottom = table.insertRow(empJson.length+1);
    var cellBotom1 = rowBottom.insertCell(0);
    var cellBottom2 = rowBottom.insertCell(1);
    cellBotom1.innerHTML = "Total Budget: ";
    cellBottom2.innerHTML = sumTotal;

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}


 