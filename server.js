const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const nodemon=require('nodemon');
const connectDb = require('./config/connectDb');


const app=express();
dotenv.config();
connectDb();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/user',require('./routes/userRoute'));
const PORT=8080||process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});
