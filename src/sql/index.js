// Proper way to organize an sql provider:
//
// - have all sql files for Users in ./sql/users
// - have all sql files for Products in ./sql/products
// - have your sql provider module as ./sql/index.js

const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

// Helper for linking to external query files:
function sql(file) {
    const fullPath = path.join(__dirname, file); // generating full path;
    return new QueryFile(fullPath, { minify: true });
}

module.exports = {
    items: {
        selectAll: sql('items/select-all.sql'),
        insert: sql('items/insert.sql'),
        insertPrice: sql('items/insert-price.sql'),
        delete: sql('items/delete.sql'),
        deletePrice: sql('items/delete-price.sql')
    },
    customers: {
        insert: sql('customers/insert.sql'),
        selectAll: sql('customers/select-all.sql'),
        update: sql('customers/update.sql'),
        delete: sql('customers/delete.sql'),
    },
    orders: {
        insert: sql('orders/insert.sql'),
        selectAll: sql('orders/select-all.sql'),
        update: sql('orders/update.sql'),
        delete: sql('orders/delete.sql'),
    }
};