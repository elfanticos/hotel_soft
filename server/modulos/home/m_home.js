'use strict'

function getDataInicial() {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM func_01__get_data_inicial() res`;
        sql = pgpromise.as.format(sql);
        dbp.any(sql).then(data => {
            if (data.res.status) return reject(data.res);
            resolve(data);
        }).catch(err => {
            reject({ msj: global.MSJ_ERROR, err: "M_home => getDataInicial => " + err });
        })
    });
}

module.exports  = {
    getDataInicial
};