const controller = require('../controllers/customers.controller');

module.exports.attachHandlers = (router) => {

    router.route('/customers/:userId')
        .put(controller.update)
        .delete(controller.delete);

    router.route('/customers')
        .get(controller.readAll)
        .post(controller.create);
};