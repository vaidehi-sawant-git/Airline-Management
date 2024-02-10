const express= require('express');
const {PORT} = require('./config/SeverConfig');

const setupStartServer = async ()=>
{
    const app=express();
    app.listen(PORT,()=>
    {
        console.log(`Server Started On ${PORT}`);
    })
}

setupStartServer();