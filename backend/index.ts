import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import userRouter from './db/fetchDb';

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.use('/',userRouter);

mongoose.connect("#URL");

app.listen(3000,()=>{console.log('Listening to 3000')});

export default app;