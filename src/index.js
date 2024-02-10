const express= require('express');
const {PORT} = require('./config/SeverConfig');
const bodyParser = require('body-parser');

const setupStartServer = async ()=>
{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT,()=>
    {
        console.log(`Server Started On ${PORT}`);
    })
}

setupStartServer();