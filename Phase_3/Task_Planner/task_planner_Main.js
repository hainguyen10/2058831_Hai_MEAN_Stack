let http = require("http");
let url = require("url");
let fs = require("fs");
let mainPage =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="addTask">
        <h3 style="text-align: center;">Task Planner</h3>
        <hr/>
        <h4>Add Task</h4>
        <label>Emp ID: </label>
        <input type="text" name="empID"/><br/>
        <label>Task ID: </label>
        <input type="text" name="taskId"/><br/>
        <label>Tasks Name: </label>
        <input type="text" name="taskName"/><br/>
        <label>Deadline: </label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="Add Task"/>
       <input type="reset" value="Reset"/> <br/>
    </form>
    <hr/>
    <form action="deleteTask">
        <h4>Delete Task</h4>
        <label>Task ID: </label>
        <input type="text" name="taskdeleteId"/>
        <input type="submit" value="Delete Task"/>
    </form>
    <hr/>
    <form action="showAllTasks">
        <h4>List Task</h4>
        <input type="submit" value="List all Tasks"/>
    </form>
</body>
</html>
`
let taskArray = []
let server = http.createServer((request, response)=>{
    let urlInfo = url.parse(request.url,true);
    response.writeHead(200,{"content-type":"text/html"});
    if(urlInfo.path !="/favicon.ico"){
        if(urlInfo.path =="/main"){
            response.write(mainPage);
        }else if(urlInfo.pathname =="/addTask"){
            let taskAdd = urlInfo.query;
            let result = taskArray.find(l=>l.taskID == taskAdd.taskId)
            if(result == undefined){
                let task1 ={empId:taskAdd.empID,taskID:taskAdd.taskId,taskName:taskAdd.taskName,date:taskAdd.deadline};
                taskArray.push(task1);
                let recordString = JSON.stringify(taskArray);
                fs.writeFileSync("task_recordStore.json",recordString);
                response.write("Task Add Successfully!");     
                response.write(mainPage);
            }else{
                response.write("Task ID Must be Unique!");
                response.write(mainPage);
            }       
        }else if(urlInfo.pathname =="/deleteTask"){
            let allTask = JSON.parse(fs.readFileSync("task_recordStore.json").toString());
            let taskDelete = urlInfo.query;
            let result = allTask.find(t=>t.taskID == taskDelete.taskdeleteId);
            if(result != undefined){
                allTask.splice(allTask.findIndex(t=> t.taskID == taskDelete.taskdeleteId),1);
                response.write("Task Delete Successfully!");
                let recordString = JSON.stringify(allTask);
                fs.writeFileSync("task_recordStore.json",recordString);
                response.write(mainPage);   
            }else{
                response.write("Task ID Not Exist In Our Record!");
                response.write(mainPage);
            }
        }else if(urlInfo.pathname =="/showAllTasks"){
            let allTask = JSON.parse(fs.readFileSync("task_recordStore.json").toString());
            let displayTaskInTable = `
                        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>All The Task</title>
                <style>
                    table.center {
                        margin-left: auto; 
                        margin-right: auto;
                    }
                </style>
            </head>
            <body>
                <h2 style="text-align: center;">Display Tasks</h2>
                <table border="1" id="taskTable" class="center">
                    <tr>
                        <th>Employee ID</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Deadline</th>
                    </tr>`
            for(let i=0;i<allTask.length;i++){
               displayTaskInTable+=`<tr> 
                    <td>${allTask[i].empId}</td>
                    <td>${allTask[i].taskID}</td>
                    <td>${allTask[i].taskName}</td>
                    <td>${allTask[i].date}</td>  
                    </tr>`
            }
            displayTaskInTable+=`</table>`
            displayTaskInTable+=`</body></html>`
            response.write(displayTaskInTable);
        }else{
            response.write(mainPage);
        }
    }
    response.end();
})
server.listen(9191,()=> console.log("Server running on port number 9191"))