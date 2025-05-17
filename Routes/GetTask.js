const express = require('express');
const router = express.Router();
const task = require('../Modals/task');


router.post('/', async (req,res)=>{
    try{
    let user=await task.findOne({email:req.body.email});

    if(user){
        let arr=user.TaskArray;
        
        res.send(arr);
    }
    else{       
       res.send("Not exists");
    }

   
}catch(error){
   console.log(error);
}
})

module.exports = router;