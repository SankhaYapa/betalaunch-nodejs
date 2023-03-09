const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 
 const employeeSchema = new Schema({

    fullName:{
        type:String,
        required:true,   
    },
    nameInitials:{
        type:String,
        required:true,   
    },
    displayName:{
        type:String,
        required:true,   
    },
    gender:{
        type:String,
        required:true,   
    },
    dob:{
        type:Date,
        required:true,   
    },
    email:{
        type:String,
        required:true,   
    },
    mobileNumber:{
        type:String,
        required:true,   
    },
   designation:{
        type:String,
        required:true,   
    },
    employeeType:{
        type:String,
        required:true,   
    },
    joinDate:{
        type:Date,
        required:true,   
    },
    experience:{
        type:String,
        required:true,   
    },
    Salary:{
        type:String,
        required:true,   
    },
    notes:{
        type:String,
        required:true,
    }
  
 })

 const Employee = mongoose.model("Employee",employeeSchema);

 module.exports = Employee;