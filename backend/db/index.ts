const express=require('express');
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import mongoose from 'mongoose';


var app=express();
app.use(bodyParser.json());
app.use(cors());

const USER=new mongoose.Schema({
    firstname:String,
    lastname:String,
    code:String,
    email:String
});



const User=mongoose.model('Users',USER);

export default User