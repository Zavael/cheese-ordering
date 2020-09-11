var router = require('express').Router()
const controller = require('../controllers/customers.controller')
const log = require('../logger')(__filename.slice(__dirname.length + 1))

router.route('/')
    .get((req, res) => {
        controller.readAll()
            .then(customers => {
                log.debug('returning', customers)
                res.render('./customers', { customers: customers })
            })
            .catch((error) => {
                log.error('Error occured', error)
                next(error)
            })
    })
    .post((req, res, next) => {
        if (!req.body) {
            log.warn('Invalid data provided', req.body)
            res.status(400).send('Invalid data!')
            return;
        }
        log.debug('post customer ', req.body)
        controller.create(req.body)
            .then((storedCustomer) => {
                log.debug('saved customer ', storedCustomer)
                res.redirect('/customers')
            })
            .catch((error) => {
                log.error('Error occured', error)
                next(error)
            })
    })

router.route('/:id')
    .delete((req, res, next) => {
        controller.delete(req.params.id)
            .then(() => {
                log.debug('deleted customer', req.params.id)
                res.end()
            })
            .catch((error) => {
                log.error('Error occured', error)
                next(error)
            })
    })

module.exports = router