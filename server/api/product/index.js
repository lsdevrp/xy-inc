'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();
var routeResponse = function (res, message) {
  res.status(message.statusCode);
  res.json(message.data);
};

/**
 * @api {get} /products Get All
 * @apiName GetAll
 * @apiGroup Products
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK  
 *    [{
 *       "_id": "58eac59c2ff4211ee495fc6a",
 *       "name": "test",
 *       "description": "test",
 *       "price": 10.5,
 *       "category": "test",
 *       "__v": 0
 *    }]
 * 
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 422
 * 
 */
router.get('/', function (req, res) {
  controller.getAll().then(function (message) {
    routeResponse(res, message);
  });
});

/**
 * @api {get} /products/:id Get by Id
 * @apiName GetById
 * @apiGroup Products
 * 
 * @apiParam {Number} Id Product unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK  
 *    {
 *       "_id": "58eac59c2ff4211ee495fc6a",
 *       "name": "test",
 *       "description": "test",
 *       "price": 10.5,
 *       "category": "test",
 *       "__v": 0
 *    }
 * 
 * @apiError ProductNotFound The id of the Product was not found.
 * 
 * @apiErrorExample Error-NotFound:
 *    HTTP/1.1 404 Not Found
 *      
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 422
 * 
 */
router.get('/:id', function (req, res) {
  controller.getById(req.params.id).then(function (message) {
    routeResponse(res, message);
  });
});

/**
 * @api {post} /products Add
 * @apiName Add
 * @apiGroup Products
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "test",
 *       "description": "test",
 *       "price": 10.5,
 *       "category": "test"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created  
 *    {
 *       "_id": "58eac59c2ff4211ee495fc6a",
 *       "name": "test",
 *       "description": "test",
 *       "price": 10.5,
 *       "category": "test",
 *       "__v": 0
 *    }
 * 
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 422
 * 
 */
router.post('/', function (req, res) {
  controller.add(req.body).then(function (message) {
    routeResponse(res, message);
  });
});

/**
 * @api {put} /products/:id Update
 * @apiName Update
 * @apiGroup Products
 * 
 * @apiParam {Number} Id Product unique ID.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "test",
 *       "description": "test",
 *       "price": 10.5,
 *       "category": "test"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK  
 *    {
 *       "_id": "58eac59c2ff4211ee495fc6a",
 *       "name": "test",
 *       "description": "test",
 *       "price": 10.5,
 *       "category": "test",
 *       "__v": 0
 *    }
 * 
 * @apiError ProductNotFound The id of the Product was not found.
 * 
 * @apiErrorExample Error-NotFound:
 *    HTTP/1.1 404 Not Found
 * 
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 422
 * 
 */
router.put('/:id', function (req, res) {
  controller.update(req.body, req.params.id).then(function (message) {
    routeResponse(res, message);
  });
});

/**
 * @api {delete} /products/:id Delete
 * @apiName Delete
 * @apiGroup Products
 * 
 * @apiParam {Number} Id Product unique ID.
 * 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 204 No Content
 * 
 * @apiError ProductNotFound The id of the Product was not found.
 * 
 * @apiErrorExample Error-NotFound:
 *    HTTP/1.1 404 Not Found
 * 
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 422
 * 
 */
router.delete('/:id', function (req, res) {
  controller.delete(req.params.id).then(function (message) {
    routeResponse(res, message);
  });
});

module.exports = router;
