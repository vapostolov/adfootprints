// routes/index.js'
'use strict';


const routeHandlers = require('require-dir')('./route-handlers');
const changeCase = require('change-case');

const BASEURL = '/api/';

function setupRoutes(server, db) {


    // Initialize all routes by iterating the keys of the require-dir
    Object.keys(routeHandlers).forEach((routeName) => {
        //connect routes to the server base url
        const newRouteHandlerClass = new routeHandlers[routeName](db);
        server.use(`${BASEURL}${changeCase.paramCase(routeName)}`, newRouteHandlerClass.setupRoutes());
    });
};

module.exports = setupRoutes;
