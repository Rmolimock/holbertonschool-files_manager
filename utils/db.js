const MongoClient = require('mongodb').MongoClient;                                                                             
const assert = require('assert');                                                                                               



class DBClient {
  constructor() {
    let host = 'localhost';
    let port = "27017";
    let dbName = "files_manager";
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
      DBClient.connection = false;
      if (assert.equal(null, err)) {
        DBClient.db = client.db(dbName);  
        DBClient.connection = true;
      }
    });
  }

  callback(ar) {
   return ar.length();
  }

  isAlive() {
	  return DBclient.connection;
  }



async nbUsers() {
 let db = DBClient.db;
 let callback = DBClient.callback;
 await function(db, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      return callback(docs);
    });
  }
}

async nbFiles() {
	let db = DBClient.db;
  let callback = DBClient.callback;
 await function(db, callback) {                                                                                            
    // Get the documents collection                                                                                             
    const collection = db.collection('files');                                                                             
    // Find some documents                                                                                                      
    collection.find({}).toArray(function(err, docs) {                                                                           
      assert.equal(err, null);                                                                                                  
      return callback(docs);                                                                                                    
    });                                                                                                                         
  }                                                                                                                             
} 

}


const dbClient = new DBClient();                                                                                          
module.exports = dbClient;

