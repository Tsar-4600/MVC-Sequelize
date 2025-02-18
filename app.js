
const express = require('express');
const cors = require('cors');
const { router } = require('./routes/router');

const app = express()
app.use(cors())

app.use(router);


app.listen(3000, () => {
    console.log('worked');
})