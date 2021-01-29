const MongoClient = require('mongodb').MongoClient;                                                                             
const assert = require('assert');                                                                                               



class DBClient {
      const host = process.env.DB_HOST || 'localhost';
      const port = process.env.DB_PORT || 27017;
      const dbName = process.env.DB_DATABASE || 'files_manager'; 
      let db = null;
      const url = 'mongodb://' + host + ':' + port;  
      MongoClient.connect(url, function(err, client) { 
        if (err) console.log(err);
        this.db = client.db(dbName);
	this.db.createCollection('users');
        this.db.createCollection('files');
      });
    }

    isAlive() {
      if (this.db) {
        return true;
      }
      return false;
    }


    async nbUsers() {
      return this.db.collection('users').countDocuments();
    }

    async nbFiles() {
      return this.db.collection('files').countDocuments();
    }


}


const dbClient = new DBClient();                                                                                          
module.exports = dbClient;

