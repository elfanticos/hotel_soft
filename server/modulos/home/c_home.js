
'use strict'
const M_home = require('./m_home');

async function getInitHome(req,res) {
    try {
        res.status(HTTP_200).send({msj : "hola mundo"});
    } catch (err) {
        print_response_error(err);
    }
}


module.exports = {
    getInitHome
};