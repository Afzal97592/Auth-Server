require("dotenv").config();
const express = require("express")
const app = express();
const cors = require('cors')
require("./db/connection");

const PORT = 4002;

// Router
const router = require("./Routes/router")


// middleware

app.use(express.json())
// i write becouse every data which come from frontend will come in formate of json

app.use(cors())

// actually when we run frontend then it will run on diffrent port nd becand on diffrent port so when i will send the request from frontend then becand running on diffrent port so i will get errror so for remove this error i am using cors


// Routers
app.use(router);



app.get('/',(req, resp)=>{
    resp.status(200).json("Server start");
})

app.listen(PORT, ()=>{
    console.log(`Server Start At Port No :${PORT}`)
})