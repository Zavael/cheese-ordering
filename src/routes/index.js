var express = require('express');
var router = express.Router();
const log = require('../logger')('ROUTER');

router.use(function (req, res, next) {
    log.debug('%s %s %s', req.method, req.url, req.path)
    next()
})

router.use('/customers', require('./customers.route'));
router.use('/orders', require('./orders.route'));

router.route('/')
    .get(function (req, res) {
        res.render('home', { title: 'Hey', message: 'Hello there!' });
    });

module.exports = router;