import express from 'express';

import User from './index';

import sha from 'js-sha256';


const router=express.Router();

async function fetchDetail(code:string){
    var user=await User.findOne({code:code})
    if(user){
        return {message:"User found",details:{firstname:user.firstname, lastname:user.lastname, email:user.email}}
    }
    else{
        return {message:"User not found"}
    }
}

async function userExist(email:string){
    var user=await User.findOne({email:email})
    if(user?.email){
        var enc=sha.sha256(user.email);
        return {exist:true,enc:enc}
    }
    else{
        return {exist:false}
    }
}

router.post('/genCode',async (req,res)=>{
    res.json(await userExist(req.body.email))
});

router.post('/retUser',async (req,res)=>{
    res.json(await fetchDetail(req.body.code))
});

export default router;