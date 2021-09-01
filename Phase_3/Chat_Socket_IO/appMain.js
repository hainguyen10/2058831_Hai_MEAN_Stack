var serverAnswer = /** @class */ (function () {
    function serverAnswer(id_answer, strQues, strRespond) {
        this.id = id_answer;
        this.ques = strQues;
        this.answerRes = strRespond;
    }
    return serverAnswer;
}());
var today = new Date();
var date = "Year: "+today.getFullYear()+'-'+"Month: "+(today.getMonth()+1)+'-'+"Date: "+today.getDate();

var msg1 = new serverAnswer(1,"HI","Hello There!");
var msg2 = new serverAnswer(2,"WHAT IS EXPERIENCE","Experience is one thing you can't get for nothing.");
var msg3 = new serverAnswer(3,"QUOTE FOR TODAY","The love of liberty is the love of others; the love of power is the love of ourselves.");
var msg4 = new serverAnswer(4,"WHAT IS TODAY DATE", date);
var msg5 = new serverAnswer(5,"IS TODAY IS A GOOD DAY","Today is a good day");
var msg6 = new serverAnswer(6,"HOW BIG IS THE SUN","The Sun Radius: 432,690 mi");
var msg7 = new serverAnswer(7,"HOW BIG IS THE EARTH","The Earth Radius: 3,958.8 mi");
var msg8 = new serverAnswer(8,"","Sorry I cannot understand");
var msg9 = new serverAnswer(9,"HELLO","Hello There!");

var listMesage = [msg1,msg2,msg3,msg4,msg5,msg6,msg7,msg9,msg8];
//load the express module
let express = require("express");
//create the reference of express module
let app = express();
//load the http module and connect to express module with Server property
let http = require("http").Server(app);
//load the socket.io module and connect http module
//with IIFE features
let io = require("socket.io")(http)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/chat_Main.html");
})
io.on("connection",(socket)=>{
    var userRequest ="";
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    //receive the message from client connection
    socket.on("obj",(msg)=>{
        userRequest = msg;
        userRequest = userRequest.toUpperCase();
        for(let i =0;i<listMesage.length;i++){
            if(userRequest == listMesage[i].ques){
                socket.emit("obj1",dateTime+" | "+listMesage[i].answerRes+"<br>")
                break;
            }else{}
        }
        let result = listMesage.find(q=>q.ques == userRequest);
        if(result == undefined){
            socket.emit("obj1",dateTime+" | "+listMesage[(listMesage.length-1)].answerRes+"<br>")
        }
    })    
})
http.listen(9191,()=>console.log("Server running on port number 9191"));