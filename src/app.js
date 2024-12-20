const express = require('express')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const compression = require('compression')
const app = express()


//init middlewares
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

//init db
app.get('/', (req, res, next) => {
    return res.status(200).send('Welcome');
})

//init routes


// handling error

module.exports = app
