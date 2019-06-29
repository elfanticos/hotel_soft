
'use strict'
const M_home = require('./m_home');

async function getInitHome(req,res) {
    try {
        let rpta = await M_home.getDataInicial();
        res.status(HTTP_200).send(rpta);
    } catch (err) {
        print_response_error(err);
    }
}


module.exports = {
    getInitHome
};