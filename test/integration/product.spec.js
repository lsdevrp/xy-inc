'use strict';

var should = require('should');
var app = require('../../server/app');
var request = require('supertest');

var product = {
  name: 'test',
  description: 'test',
  price: 10.5,
  category: 'test'
};

function checkBody(res) {
  res.body.should.have.property('_id');
  res.body.should.have.property('name');
  res.body.should.have.property('description');
  res.body.should.have.property('price');
  res.body.should.have.property('category');

  res.body.name.should.be.equal(product.name);
  res.body.description.should.be.equal(product.description);
  res.body.price.should.be.equal(product.price);
  res.body.category.should.be.equal(product.category);
}

describe('GET /products', function () {
  it('should respond with JSON array', function (done) {
    request(app)
      .get('/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('GET /products/:id', function () {
  it('should respond with JSON object', function (done) {
    request(app)
      .get('/products/58eac59c2ff4211ee495fc6a')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        checkBody(res);
        done();
      });
  });
});

describe('POST /products', function () {
  it('should respond with JSON object', function (done) {
    request(app)
      .post('/products')
      .send(product)
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        checkBody(res);
        done();
      });
  });
});

describe('PUT /products/:id', function () {
  it('should respond with changed JSON object', function (done) {
    product.name = 'changed';
    request(app)
      .put('/products/58eac59c2ff4211ee495fc6a')
      .send(product)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        checkBody(res);
        done();
      });
  });
});

describe('DELETE /products/:id', function () {
  it('should respond 204 No Content', function (done) {
    request(app)
      .delete('/products/58eac59c2ff4211ee495fc6a')
      .expect(204)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.be.empty();
        done();
      });
  });
});
