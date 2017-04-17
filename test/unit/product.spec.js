'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var q = require('q');

var productController = require('../../server/api/product/product.controller');
var productModel = require('../../server/api/product/product.model');
var httpStatus = require('http-status');

describe('Product controller', function () {
  var productId = '58eac59c2ff4211ee495fc6a';
  var product = {
    name: 'test',
    description: 'test',
    price: 10.5,
    category: 'test'
  };
  var productUpdate = {
    save: function () {}
  };
  var productRemove = {
    remove: function () {}
  };

  beforeEach(function () {
    sinon.stub(productModel, 'find');
    sinon.stub(productModel, 'findById');
    sinon.stub(productModel, 'create');
    sinon.stub(productUpdate, 'save');
    sinon.stub(productRemove, 'remove');
  });

  afterEach(function () {
    productModel.find.restore();
    productModel.findById.restore();
    productModel.create.restore();
    productUpdate.save.restore();
    productRemove.remove.restore();
  });

  describe('GetAll Products', function () {
    it('should respond an array', function (done) {
      productModel.find.returns(q.resolve([product]));
      productController.getAll()
        .then(function (response) {
          expect(productModel.find.calledOnce).to.be.true;
          expect(productModel.find.calledWith()).to.be.true;
          expect(response.data).to.deep.equal([product]);
          expect(response.statusCode).to.be.equal(httpStatus.OK);
          done();
        });
    });

    it('should respond an error', function (done) {
      productModel.find.returns(q.reject('error'));
      productController.getAll()
        .then(function (response) {
          expect(productModel.find.calledOnce).to.be.true;
          expect(productModel.find.calledWith()).to.be.true;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });
  });

  describe('Get Product by ID', function () {
    it('should respond an object', function (done) {
      productModel.findById.returns(q.resolve(product));
      productController.getById(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(response.data).to.deep.equal(product);
          expect(response.statusCode).to.be.equal(httpStatus.OK);
          done();
        });
    });

    it('should respond not found', function (done) {
      productModel.findById.returns(q.resolve(undefined));
      productController.getById(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(response.data).to.deep.equal(undefined);
          expect(response.statusCode).to.be.equal(httpStatus.NOT_FOUND);
          done();
        });
    });

    it('should respond an error', function (done) {
      productModel.findById.returns(q.reject('error'));
      productController.getById(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });
  });

  describe('Add Product', function () {
    it('should respond an object', function (done) {
      productModel.create.returns(q.resolve(product));
      productController.add(product)
        .then(function (response) {
          expect(productModel.create.calledOnce).to.be.true;
          expect(productModel.create.calledWith(product)).to.be.true;
          expect(response.data).to.deep.equal(product);
          expect(response.statusCode).to.be.equal(httpStatus.CREATED);
          done();
        });
    });

    it('should respond an error', function (done) {
      productModel.create.returns(q.reject('error'));
      productController.add(product)
        .then(function (response) {
          expect(productModel.create.calledOnce).to.be.true;
          expect(productModel.create.calledWith(product)).to.be.true;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });
  });

  describe('Update Product', function () {
    it('should respond an object', function (done) {
      productUpdate.save.returns(q.resolve(product));
      productModel.findById.returns(q.resolve(productUpdate));
      productController.update(product, productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productUpdate.save.calledOnce).to.be.true;
          expect(response.data).to.deep.equal(product);
          expect(response.statusCode).to.be.equal(httpStatus.OK);
          done();
        });
    });

    it('should respond not found', function (done) {
      productUpdate.save.returns(q.resolve());
      productModel.findById.returns(q.resolve(undefined));
      productController.update(product, productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productUpdate.save.calledOnce).to.be.false;
          expect(response.data).to.deep.equal(undefined);
          expect(response.statusCode).to.be.equal(httpStatus.NOT_FOUND);
          done();
        });
    });

    it('should respond an error', function (done) {
      productUpdate.save.returns(q.resolve());
      productModel.findById.returns(q.reject('error'));
      productController.update(product, productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productUpdate.save.calledOnce).to.be.false;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });

    it('should respond an error to save', function (done) {
      productUpdate.save.returns(q.reject('error'));
      productModel.findById.returns(q.resolve(productUpdate));
      productController.update(product, productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productUpdate.save.calledOnce).to.be.true;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });
  });

  describe('Delete Product', function () {
    it('should respond an object', function (done) {
      productRemove.remove.returns(q.resolve(product));
      productModel.findById.returns(q.resolve(productRemove));
      productController.delete(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productRemove.remove.calledOnce).to.be.true;
          expect(response.data).to.deep.equal(product);
          expect(response.statusCode).to.be.equal(httpStatus.NO_CONTENT);
          done();
        });
    });

    it('should respond not found', function (done) {
      productRemove.remove.returns(q.resolve());
      productModel.findById.returns(q.resolve(undefined));
      productController.delete(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productRemove.remove.calledOnce).to.be.false;
          expect(response.data).to.deep.equal(undefined);
          expect(response.statusCode).to.be.equal(httpStatus.NOT_FOUND);
          done();
        });
    });

    it('should respond an error', function (done) {
      productRemove.remove.returns(q.resolve());
      productModel.findById.returns(q.reject('error'));
      productController.delete(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productRemove.remove.calledOnce).to.be.false;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });

    it('should respond an error to remove', function (done) {
      productRemove.remove.returns(q.reject('error'));
      productModel.findById.returns(q.resolve(productRemove));
      productController.delete(productId)
        .then(function (response) {
          expect(productModel.findById.calledOnce).to.be.true;
          expect(productModel.findById.calledWith(productId)).to.be.true;
          expect(productRemove.remove.calledOnce).to.be.true;
          expect(response.data).to.be.equal('error');
          expect(response.statusCode).to.be.equal(httpStatus.UNPROCESSABLE_ENTITY);
          done();
        });
    });
  });
});
