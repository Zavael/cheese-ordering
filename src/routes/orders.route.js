var router = require('express').Router()
const controller = require('../controllers/orders.controller')
const customersController = require('../controllers/customers.controller')
const log = require('../logger')(__filename.slice(__dirname.length + 1))

router.route('/')
    .get((req, res) => {
        controller.readAll()
            .then(orders => {
                customersController.readAll()
                    .then(customers => {
                        orders.forEach(order => {
                            order.customer = customers
                                .find(storedCustomer => order.customer_id == storedCustomer.id)
                        });
                        log.debug('returning', orders)
                        res.render('./orders', { orders: orders, customers: customers })
                    })
            })
            .catch((error) => {
                log.error('Error occured', error)
                next(error)
            })
    })

router.route('/add')
    .get((req, res) => {
        res.render('./orders/add')
    })
    .post((req, res, next) => {
        log.debug('post order')
        if (!req.body) {
            log.warn('Invalid data provided', req.body)
            res.status(400).send('Invalid data!')
            return;
        }
        controller.create(req.body)
            .then((storedCustomer) => {
                log.debug('saved order ', storedCustomer)
                res.redirect('/orders')
            })
            .catch((error) => {
                log.error('Error occured', error)
                next(error)
            })
    })

module.exports = router;