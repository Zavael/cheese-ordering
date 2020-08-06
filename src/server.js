const express = require('express');
const apiRouter = require('./routes');
const log = require('./logger')(__filename.slice(__dirname.length + 1));

module.exports.createServer = function createServer() {

    var server = express();

    log.debug('Setting up basic startup configuration...');
    // config.applyConfiguration(server);
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.set('view engine', 'pug')

    server.get('/', function (req, res) {
        res.render('home', { title: 'Hey', message: 'Hello there!' })
    })
    server.get('/orders', function (req, res) {
        // res.render('orders', { title: 'Orders', orders: require('./services/orders.service').readAll })
        require('./services/orders.service').readAll(req, res);
    })
    server.get('/customers', function (req, res) {
        require('./services/customers.service').readAll(req, res);
    })

    // attach router handlers
    server.use('/api', apiRouter);
    // apiRoutes.attachHandlers(server);

    // setup general error handler
    server.use(function (err, req, res, next) {
        if (!err.logged) {
            log.error('Express default error handler:', err);
        }
        res.status(500).send('Something broke!')
    });
    // setup 404 error handler
    server.use(function (req, res, next) {
        res.status(404).send({ error: 'Not found' });
    });

    return server;
};