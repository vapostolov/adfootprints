//routes/base-route-handler.js
'use strict';

const express = require('express');
const wrap = require('co-express');


class BaseRouteHandler {
    constructor(collectionName, db) {
        this.db = db;
        this.router = new express.Router();
        this.collectionName = collectionName;
        this.collection = this.db[this.collectionName];
        this.setupMiddleware();
    }

    static validateOkResponse(res, foundItems) {
        if (!foundItems || !foundItems.length) {
            res.status(404).send('item not found');
            return false;
        }
        return true;
    }

    setupMiddleware() {
        // attach any middleware you might need on a route baseis,; can be overriden in subclasses
        //this.router.use(someMiddlewareFunction);
    }

    static * getSingle(req, res, next) {
        try {
            const foundItems = yield this.collection.find({ id: req.params.id });
            if (BaseRouteHandler.validateOkResponse(res, foundItems)) res.json(foundItems[0]);
        } catch (err) {
            res.status(500).send('Internal Error');
            throw err;
        }
    }

    static * putSingle(req, res, next) {
        try {
            const result = yield this.collection.insert([req.body]);
            if (BaseRouteHandler.validateOkResponse(res, result)) res.json(result[0]);
        } catch (err) {
            res.status(500).send('Internal Error');
            throw err;
        }
    }

    static * deleteSingle(req, res, next) {

        const result = this.mongooseCollection.remove({ id: req.params.id });
        res.json(result);

    }

    static * getMultiple(req, res, next) {
        try {
            res.connection.setTimeout(0); // disable server timeout - this may take a while
            const result = yield this.collection.find({});
            res.json(allItems);
        } catch (err) {
            res.status(500).send('Internal Error');
            throw err;
        }
    }

    static * postMultiple(req, res, next) {
        try {
            const result = yield this.collection.update([req.body]);
            res.json(result);
        } catch (err) {
            res.status(500).send('Internal Error');
            throw err;
        }
    }

    // eslint-disable-next-line require-yield
    static * notImplemented(req, res, next) {
        res.status(501).send('Not implemented');
    }

    setupRoutes() {
        const self = this;
        this.router.route('/:id')
            .get(wrap(self.constructor.getSingle))
            .put(wrap(self.constructor.putSingle))
            .delete(wrap(self.constructor.deleteSingle))
            .patch(wrap(self.constructor.notImplemented))
            .post(wrap(self.constructor.notImplemented));

        this.router.route('/')
            .get(wrap(self.constructor.getMultiple))
            .post(wrap(self.constructor.postMultiple()))
            .put(wrap(self.constructor.notImplemented))
            .patch(wrap(self.constructor.notImplemented))
            .delete(wrap(self.constructor.notImplemented));

        return this.router;
    }
}

module.exports = BaseRouteHandler;
