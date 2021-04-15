const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:20,
        required:true,
        trim: true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
});

const User = mongoose.model('User',userSchema);

module.export =User;
