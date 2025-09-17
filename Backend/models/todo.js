const mongoose=require('mongoose');

const todo= mongoose.Schema({
    title:{
        type:String,

    },
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const Todo=new mongoose.model('todo',todo);

module.exports=Todo