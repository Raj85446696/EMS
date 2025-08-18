const express = require('express');
const app = express(); 

const dotenv = require('dotenv');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
dotenv.config(); 

const PORT = process.env.PORT ; 

app.get('/',(req,res)=>{
    res.send('hy');
})

app.listen(PORT,()=>{
    console.log(`App running on ${PORT} Port`);
})