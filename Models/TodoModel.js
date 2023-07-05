const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//Add userID to to-do, so all the to-do's that are linked with all the users can be seen

const todoSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:true
    }
},{timestamps:true});


const Todos = mongoose.model('Todo',todoSchema);

module.exports = Todos;