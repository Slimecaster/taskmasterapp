const express = require('express');
const path = require("path");
const app = express();
const logger = require('./middleware/logger');
const homeRoutes = require('../src/routes/homeRoutes');
const submitRoutes = require('../src/routes/homeRoutes');

//Middleware
app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/',homeRoutes);
app.use('/submit', submitRoutes);


module.exports = app;