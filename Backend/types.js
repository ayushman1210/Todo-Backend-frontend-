const zod=require('zod');

const createzod=zod.object({
    title:zod.string(),
description:zod.string(),
})

const updatezod=zod.object({
  id:zod.string(),
})


module.exports={
    createTodo:createzod,
    updatetodo:updatezod
} 