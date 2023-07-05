const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const ConnectionString  = process.env.DATABASE;
const port = process.env.PORT || 3002;
const http = require("http");
const server = http.createServer(app);
const cors  = require("cors");
const bodyparser = require("body-parser");
const todo = require("./Routes/TodoRouter");


//Create connection to db
mongoose.connect(ConnectionString).then((res)=>{
    server.listen(port,()=>{
        console.log(`Server listening on ${port}`);
        console.log("Connected to DB successfully");
    });
}).catch((err)=>{
    console.log(err);
})

//Middlewares
app.use(bodyparser.json());
app.use([cors()]);

//App routes
app.use('/to-do',todo);



