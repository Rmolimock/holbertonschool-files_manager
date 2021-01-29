const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

function getStatus(req, res) {
	res.status(200).json{{ redis: true, db: true });
}


function getStats(req, res) {
	res.status(200).json({ users: userNum, files: fileNum });
}
