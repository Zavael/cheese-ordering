const db = require('../db');
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

function deleteOrder(id) {
    log.info('delete order', id);
    return db.none(sql.delete, id);
};

module.exports = {
    create: createOrder,
    readAll: readAll,
    delete: deleteOrder
}