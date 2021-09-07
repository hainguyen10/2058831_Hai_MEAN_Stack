// load the module 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let courseModel = require("./course.model");
//create the reference 
let app = express();
app.use(bodyParser.json());

let url = "mongodb://localhost:27017/tcsmean";
//connect the database
mongoose.connect(url).then(res=>console.log("Connected")).
catch(error=>console.log(error));
let coursePlatformMain = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3 style="text-align: center;">Course Platform</h3>
    <form action="addCoursetoDatabase">
        <h4>Add Course</h4>
        <label>Course ID: </label>
        <input type="text" name="courseID"/><br/>
        <label>Course Name: </label>
        <input type="text" name="courName"/><br/>
        <label>Description: </label>
        <input type="text" name="descriptName"/><br/>
        <label>Amount: </label>
        <input type="number" name="courAmt"/><br/>
        <input type="submit" value="Add"/>
       <input type="reset" value="Reset"/> <br/>
    </form>
    <br/>
    <hr/>
    <form action="updateCoursetoDatabase">
        <h4>Update Course</h4>
        <label>Course ID: </label>
        <input type="text" name="courseID"/><br/>
        <label>Amount: </label>
        <input type="number" name="courAmt"/><br/>
        <input type="submit" value="Update"/>
       <input type="reset" value="Reset"/> <br/>
    </form>
    <hr/>
    <form action = "deleteCoursetoDatabase">
        <h4>Delete Course</h4>
        <label>Course ID: </label>
        <input type="text" name="courseID"/><br/>
        <input type="submit" value="Delete"/>

    </form>
    <hr/>
    <form action = "showCoursesinDatabase">
        <h4>Fetch Courses</h4>
        <input type="submit" value="Show All Courses"/>
    </form>
</body>
</html>`
app.get("/",(req,response)=>{
    response.send(coursePlatformMain);
})//end main
app.get("/addCoursetoDatabase",(request,response)=>{
    let id = parseInt(request.query.courseID);
    let courname = request.query.courName;
    let descrip = request.query.descriptName;
    let amountcredit =parseInt(request.query.courAmt);
    courseAdd = {_id:id,coursename:courname,courseDescript:descrip,amount:amountcredit}
    courseModel.insertMany(courseAdd,(err,result)=>{
        if(!err){
            response.send(coursePlatformMain);
        }else{
            response.send({"msg":"Course ID must be unique"});
        }
    })
})//end addcoursetoDatabase
app.get("/updateCoursetoDatabase",(request,response)=>{
    let id = parseInt(request.query.courseID);
    let amountcredit =parseInt(request.query.courAmt);
    courseModel.updateOne({_id:id},{$set:{amount:amountcredit}},(err,result)=> {
        if(!err){
            if(result.matchedCount> 0){
                response.send(coursePlatformMain);
            }else{
                response.send({"msg":"Course ID is not exist"});
            }            
        }else {
            response.send(err);
        }
    })
})//end updateCoursetoDatabase
app.get("/deleteCoursetoDatabase",(request,response)=>{
    let id = parseInt(request.query.courseID);
    courseModel.deleteOne({_id:id},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                response.send(coursePlatformMain);
            }else{
                response.send({"msg":"Course ID is not exist"});
            }
        }else {
            response.send(err);
        }
    })
})//end deleteCoursetoDatabase

app.get("/showCoursesinDatabase",(request,response)=>{
    let displayCourseInTable =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    table.center {
        margin-left: auto; 
        margin-right: auto;
    }
    </style>
</head>
<body>
    <h4 style="text-align: center;">Courses Contents</h4>  
    <table border="1" id="taskTable" class="center">
        <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Course Description</th>
            <th>Credit</th>
        </tr>
`
    courseModel.find({},(err,data)=> {
        if(!err){
            for(let i= 0; i<data.length;i++){
                displayCourseInTable+=`
                <td>${data[i]._id}</td>
                    <td>${data[i].coursename}</td>
                    <td>${data[i].courseDescript}</td>
                    <td>${data[i].amount}</td>  
                    </tr>
                `
            }
            displayCourseInTable+=`</table>`
            displayCourseInTable+=`</body></html>`
            response.send(displayCourseInTable);

        }else {
             response.json(err);   
        }
    })
})//end showCoursesinDatabase

app.listen(9191,()=>console.log("Server running on port number 9191"));