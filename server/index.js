'use strict'
const port = process.env.PORT || 3000,
	  express    = require('express'),
	  bodyParser = require('body-parser'),
	  cors       = require('cors'),
	  app        = express();

// Configurations
require('./config/constant');
require('./config/authenticated');
require('./helpers/util.helper');

// JWT
global.jwt = require('jwt-simple');

app
	// parse application/json
	.use(bodyParser.json())
	// parse application/x-www-form-urlencoded
	.use(bodyParser.urlencoded({extended : false}))
	// Cabecera http
    .use(cors());

// Routes
let home_module  = require('./modulos/home/config/home_module');

app
	.use('/home', home_module);

// Iniciar servidor
app.listen(port, () => {});

module.exports = app;