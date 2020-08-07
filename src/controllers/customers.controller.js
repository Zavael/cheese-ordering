const db = require('../db');
const sql = require('../sql').customers;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createCustomer(customer) {
    log.info('create customer', customer);
    return db.one(sql.insert, customer);
};

function readAll() {
    log.info('read customers');
    return db.any(sql.selectAll);
};

function updateCustomer(id) {
    log.info('update customer', req.params, req.body);
    res.send('TBD');
};

function deleteCustomer(id) {
    log.info('delete customer', req.params);
    return db.none(sql.delete, id)
};

module.exports = {
    create: createCustomer,
    readAll: readAll,
    update: updateCustomer,
    delete: deleteCustomer
}