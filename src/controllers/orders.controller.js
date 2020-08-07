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

module.exports = {
    create: createOrder,
    readAll: readAll
}