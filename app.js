
const express = require('express');
const cors = require('cors');
const { router } = require('./routes/router');
const { sequelize } = require('./db/db');

const app = express()
app.use(cors())

app.use(router);
app.use(express.urlencoded());


sequelize.sync().then(() => {
    app.listen(3000, ()=>{
        console.log('Работает! >:) ');
    });
 
});