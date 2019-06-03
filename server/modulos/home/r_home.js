'use strict'

const express = require('express'),
    ctrl      = require('./c_home'),
    api       = express.Router();

api
    .get('/getInitHome'   , ensureAuth, ctrl.getInitHome)

module.exports = api;