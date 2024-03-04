const express= require('express');
const {PORT} = require('./config/SeverConfig');
const bodyParser = require('body-parser');

const ApiRoutes = require('./routes/index');
const db = require('./models/index');
const setupStartServer = async ()=>
{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,()=>
    {
        console.log(`Server Started On ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter : true});
        }
    })
}

setupStartServer();