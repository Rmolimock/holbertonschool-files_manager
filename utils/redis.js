const redis = require("redis");


let RedisClient = class {
    constructor(redis) {
        this.client = redis.createClient();
        this.client.on("error", function(error) {
            console.error(error);
        });
    }

    isAlive () {
        return this.client.connected;
    }

    get (key) {
	    return this.client.get(key);
    }
    set (key, value, duration) {
	    return this.client.set(key, value, duration);
    }
    del (key) {
	    return this.client.del(key);
    }
};

let redisClient = new RedisClient(redis);

module.exports.redisClient = redisClient;
