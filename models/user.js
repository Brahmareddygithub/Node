const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{type:String,unique:true,lowercase: true},
    name:String,
    password:String
})

module.exports = mongoose.model('User',UserSchema);