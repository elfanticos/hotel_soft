'use strict'
var express   = require('express'),
    app       = express(),
    constants = require('./home_constant');

//Cargar rutas
var home_routes = require('../r_home');


app
    .use('/'  , home_routes)

module.exports = app;