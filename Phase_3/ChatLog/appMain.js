//load the express module
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let chatModule = require("./chat.model");
//create the reference of express module
let app = express();
app.use(bodyParser.json());
let url = "mongodb://localhost:27017/tcsmean";
//connect the database
mongoose.connect(url).then(res=>console.log("Connected")).
catch(error=>console.log(error));
//load the http module and connect to express module with Server property
let http = require("http").Server(app);
//load the socket.io module and connect http module
//with IIFE features
let io = require("socket.io")(http)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/chatFrameWork.html");
})
io.on("connection",(socket)=>{
    //receive the message from client application
    socket.on("userName",(nameUser)=>{
        socket.on("userMsg",(usermsg)=>{
            console.log(nameUser);
            console.log(usermsg);
            const myRnId = () => Math.round((parseInt(Date.now() * Math.random()))/1000000);
            console.log(myRnId()); // any random number included timeStamp;
            chatHistoryAdd = {_id:myRnId(),nameUser:nameUser,userMessDescript:usermsg};
            chatModule.insertMany(chatHistoryAdd,(err,result)=>{
                if(!err){
                    //console.log("Success")
                    socket.emit("browserpromt","Successfully Stored");
                }else{
                    //console.log("Cannot be Store!")
                    socket.emit("browserpromt","Failure to Stored");
                }
            })
        })
    })    
})

http.listen(9191,()=>console.log("Server running on port number 9191"));