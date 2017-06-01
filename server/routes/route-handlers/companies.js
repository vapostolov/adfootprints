
//routes/route-handlers/companies.js
'use strict';

const BaseRouteHandler = require('../base-route-handler');


class CompaniesRouter extends BaseRouteHandler {
    constructor(db) {
        super('companies', db);
    }

    static * putSingle(req, res, next) {
        yield* super.notImplemented(req, res, next);
    }

    static * deleteSingle(req, res, next) {
        yield super.notImplemented(req, res, next);
    }

    static * postSingle(req, res, next) {
        // do some code to send an email to the admin, to ask to create multiple new companies
    }
}

module.exports = CompaniesRouter;
