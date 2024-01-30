const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRoute = require('./router/indexRouter')
const session = require('express-session');

app.use(indexRoute);
app.set('view engine', 'ejs');
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret: 'secretsociety'
}))

app.listen(3000, () => {
    console.log('Server started on port 3000')
});