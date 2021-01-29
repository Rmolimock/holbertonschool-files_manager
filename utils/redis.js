const redis = require("redis");
import { promisify } from 'util';


class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.client.on("error", function(error) {
            console.error(error);
        });
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        const asyncGet = promisify(this.client.get).bind(this.client);
        const ret = await asyncGet(key);
        return ret;
    }

    async set(key, value, duration) {
        await this.client.set(key, value);
        await this.client.expire(key, duration);
    }

    async del(key) {
        await this.client.del(key);
    }
}

const redisClient = new RedisClient();
module.exports = redisClient;

