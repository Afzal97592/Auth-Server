const mongoose = require("mongoose");
const validator = require("validator")


const userOtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    otp:{
        type:String,
        required:true,
    }
});


//user Otp model

const userotp = new mongoose.model("userOtps", userOtpSchema)

module.exports = userotp;