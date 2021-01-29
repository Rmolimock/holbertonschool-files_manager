const MongoClient = require('mongodb').MongoClient;                                                                             

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const dbName = process.env.DB_DATABASE || 'files_manager'; 


class DBClient {
    constructor() {
      this.db = null;
      const url = "mongodb://" + host + ":" + port + "/" + dbName
      MongoClient.connect(
        url,
        { useUnifiedTopology: true },
        (err, client) => {
          if (err) this.db = false;
          else {
            this.db = client.db(dbName);
            this.db.createCollection('users');
            this.db.createCollection('files');
          }
        },
      );
    }
 
    isAlive() {
      return !!this.client;
    }


    async nbUsers() {
      const numUsers = await this.client.collection('users').estimatedDocumentCount({});
      return numUsers;
    }

    async nbFiles() {
      const numFiles = await this.client.collection('files').estimatedDocumentCount({});
      return numFiles;
    }

}


const dbClient = new DBClient();                                                                                          
module.exports = dbClient;

