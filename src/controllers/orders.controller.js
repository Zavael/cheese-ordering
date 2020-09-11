const db = require('../db');
const { update } = require('./customers.controller');
const sql = require('../sql').orders;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function readAll() {
    log.info('read orders');
    return db.any(sql.selectAll);
};

function createOrder(order) {
    log.info('create order', order);
    return db.one(sql.insert, order);
};

function updateOrder(id, order) {
    log.info('update order with', order);
    var updateString = nonEmptyColumnsToUpdate(JSON.stringify(order))
    return db.one(sql.update, [id, updateString]);
};

function deleteOrder(id) {
    return db.none(sql.delete, id);
};

function nonEmptyColumnsToUpdate(string) {
    return string
        .slice(1, string.length - 1)
        .replace(/"/g, '')
        .replace(/:/g, ' = ')
}

module.exports = {
    create: createOrder,
    update: updateOrder,
    readAll: readAll,
    delete: deleteOrder
}