const MongoClient = require('mongodb').MongoClient;                                                                             
const assert = require('assert');                                                                                               



class DBClient {

    constructor() {
      let host = 'localhost';
      let port = "27017";
      let dbName = "files_manager";
      let db = null;
      if (process.env.DB_HOST) {
        let host = process.env.DB_HOST;
      }
      if (process.env.DB_PORT) {
  	let post = process.env.DB_PORT;
      }
      if (process.env.DB_DATABASE) {
	let dbName = process.env.DB_DATABASE;
      }
      const url = 'mongodb://' + host + ':' + port;  
      MongoClient.connect(url, function(err, client) { 
        if (assert.equal(null, err)) {
          this.db = client.db(dbName);
	  this.db.createCollection('users');
          this.db.createCollection('files');
        }
        if (err) console.log(err);
      });
    }

    isAlive() {
      if (this.db) {
        return true;
      }
      return false;
    }


    async nbUsers() { return this.db.collection('users').countDocuments(); }

    async nbFiles() { return this.db.collection('files').countDocuments(); }


}


const dbClient = new DBClient();                                                                                          
module.exports = dbClient;

