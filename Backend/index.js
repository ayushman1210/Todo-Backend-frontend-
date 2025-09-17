const express=require('express');

const app=express();
require('dotenv').config();

const port=process.env.PORT
const {connectdb}=require('./db/db');
const { createTodo, updatetodo } = require('./types');
const Todo = require('./models/todo');
const cors=require('cors')
app.use(express.json());
app.use(cors());

app.post('/post',async (req,res)=>{
    const data=req.body;
    const parsedata=createTodo.safeParse(data);
    if(!parsedata){res.status(400).json({
        message:"invalid payload"
    })
    return ;
    }

    await Todo.create({
    title:data.title,
    description:data.description,
    completed:false
})

res.status(200).json({
message:"todo is created"
})
})

app.get('/get',async (req,res)=>{
const data=await Todo.find({});
res.status(200).json({
    data:data,
    message:"data is sent"
})
})


app.put('/completed',async(req,res)=>{
const updated=req.body;
const data=updatetodo.safeParse(updated);
if(!data){res.status(400).json({messge:"input filed are wrong"})
return;
}
await Todo.update({
    id:req.body._id, 
},{
     completed:true,
})
})



app.listen(port,async()=>{
    console.log("hello on "+port)
    await connectdb(process.env.MONGO_URL)
}
)