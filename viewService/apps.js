const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const imageviewRoutes = require('./api/routes/imageviewapi');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/imageview',imageviewRoutes);

//general error message
app.use((req, res, next) => {
 const error = new Error('Not Found');
 error.status = 404;
 next(error);
});

//Internal Server
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;