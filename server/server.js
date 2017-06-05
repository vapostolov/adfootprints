
// Far from perfect, but a good base example for a server.
// Should also change console.log to some logger.
//server .js
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const process = require('process');
const mongoose = require('mongoose');
const server = express();
var Sequelize = require('sequelize');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res, next) => {
    console.log(`${req.method} request on ${req.url}`);
    next();
});

const db = mongoose.connect('mongodb://localhost');

const sequelize = new Sequelize('pickleAFP', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//support for cross origin requests
server.use(cors({
    origins: '*',
    credentials: true,
    methods: ['GET', 'PUT', 'DELETE', 'POST', 'OPTIONS'],
    headers: ['X-Requested-With'],
}));


server.on('uncaughtException', (req, res, route, err) => {
    console.log(`Internal Server Error ${err}`);
    res.send(500, { message: 'Internal Server Error' });
});

const PORT = 8080;
var listen = server.listen(PORT, '0.0.0.0', () => console.log(`REST server listening on PORT`));

// health check path
server.get('/status', (req, res, next) => {
    res.sendStatus(200, 'ok');
});

require('./routes/index')(server, db);
server.get('*', (req, res, next) => {
    res.status(404).send('route not defined');
    return next();
});

function cleanup() {
    //do server cleanup.
}

// http://glynnbird.tumblr.com/post/54739664725/graceful-server-shutdown-with-nodejs-and-express
// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
var gracefulShutdown = function () {
    console.log("Received kill signal, shutting down gracefully.");
    listen.close(function () {
        console.log("Closed out remaining connections.");
        process.exit()
    });

    // if after 
    setTimeout(function () {
        console.error("Could not close connections in time, forcefully shutting down");
        process.exit()
    }, 10 * 1000);
}

// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);

// export for testing
module.exports = server;

