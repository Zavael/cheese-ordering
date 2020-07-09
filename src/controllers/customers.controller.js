const db = require('../db');
const sql = require('../sql').customers;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createCustomer(req, res, next) {
    log.info('create customer', req.body);

    if (!req.body || !req.body.length) {
        log.warn('Invalid data provided', req.body);
        res.status(400).send('Invalid data!');
        return;
    }

    db.none(sql.insert, req.body)
        .then(() => {
            res.status(201).json(req.body);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readAll(req, res, next) {
    log.info('read customers');
    db.any(sql.selectAll)
        .then(customers => {
            log.debug('returning', customers);
            res.send(customers);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function updateCustomer(req, res, next) {
    log.info('update customer', req.params, req.body);
    res.send('TBD');
};

function deleteCustomer(req, res, next) {
    log.info('delete customer', req.params);
    res.send('TBD');
};

module.exports = {
    create: createCustomer,
    readAll: readAll,
    update: updateCustomer,
    delete: deleteCustomer
}