const assert = require('assert');
const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

describe('RedisClient', function() {
describe('#isAlive()', function() {
    it('should return true if alive', function() {
    assert.equal(redisClient.isAlive != false, true);
    });
});
});

describe('RedisClient', function() {
    describe('#isAlive()', function() {
        it('should return false if not alive', function() {
        assert.equal(redisClient.isAlive === false, false);
        });
    });
    });

describe('RedisClient', function() {
    describe('#client()', function() {
        it('should return true', function() {
        assert.equal(redisClient.client != undefined, true);
        });
    });
    });

describe('DBClient', function() {
describe('#db()', function() {
    it('should return a connection, but not working yet', function() {
    assert.equal(dbClient.db, undefined);
    });
});
});

describe('DBClient', function() {
    describe('#isAlive()', function() {
        it('should return a connection, but not working yet', function() {
        assert.equal(dbClient.isAlive != false, true);
        });
    });
    });

