const db = require('../db');
const sql = require('../sql').orders;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function readAll(req, res) {
    log.info('read orders');
    db.any(sql.selectAll)
        .then(result => {
            log.debug('returning', result);
            res.render('orders', { title: 'Orders', orders: result });
        })
        .catch((error) => {
            log.error(error);
            res.render('orders', { title: 'Exception' });
        });
};

module.exports = {
    readAll: readAll
}