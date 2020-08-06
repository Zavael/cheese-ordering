const db = require('../db');
const sql = require('../sql').customers;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function readAll(req, res) {
    log.info('read customers');
    db.any(sql.selectAll)
        .then(result => {
            log.debug('returning', result);
            res.render('customers', { title: 'Customers', customers: result });
        })
        .catch((error) => {
            log.error(error);
            res.render('customers', { title: 'Exception' });
        });
};

module.exports = {
    readAll: readAll
}