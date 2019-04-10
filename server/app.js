'use strict'
const express    = require('express'),
	  bodyParser = require('body-parser'),
	  cors       = require('cors'),
	  app        = express();

// Configurations
require('./config/constant');
require('./config/authenticated');

/**JWT */
global.jwt = require('jwt-simple');
//ROUTES
// var r_auth    = require("./modulos/auth/r_auth");
// var r_ingreso_egreso = require("./modulos/ingreso-egreso/r_ingreso_egreso");

app
	//parse application/json
	.use(bodyParser.json())
	//parse application/x-www-form-urlencoded
	.use(bodyParser.urlencoded({extended : false}))
	//Cabecera http
    .use(cors())
    .use('/', (req,res) => {
        console.log('llegue aqui');
        res.status(200).send({msj : 'hola'});
    });
	// .use('/auth',r_auth)
	// .use('/ingreso_egreso',r_ingreso_egreso)


module.exports = app;