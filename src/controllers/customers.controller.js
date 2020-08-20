const db = require('../db')
const sql = require('../sql').customers
const log = require('../logger')(__filename.slice(__dirname.length + 1))

function createCustomer(customer) {
    log.info('create customer', customer)
    return db.one(sql.insert, customer)
};

function readAll() {
    log.info('read customers')
    return db.any(sql.selectAll)
};

function updateCustomer(id, customer) {
    log.info('update customer', id, customer)
    res.send('TBD');
};

function deleteCustomer(id) {
    log.info('delete customer', id)
    return db.none(sql.delete, id)
};

module.exports = {
    create: createCustomer,
    readAll: readAll,
    update: updateCustomer,
    delete: deleteCustomer
}