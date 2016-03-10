'use strict';

var request = require('supertest-as-promised'),
 assert = require('chai').assert;


request = request('localhost:1337/');

describe('Test PeopleController', function () {
  it('should return success', function (done) {
    request
    .get('People')
    .expect(200)
    .then(function (res) {   
      
      done();
    });
  });
  
});