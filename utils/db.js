const MongoClient = require('mongodb').MongoClient;                                                                             

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const dbName = process.env.DB_DATABASE || 'files_manager'; 


class DBClient {
    constructor() {
      this.db = null;
      const url = "mongodb://" + host + ":" + port + "/" + dbName
      const client = new MongoClient(url, { useUnifiedTopology: true });
      function connection(client) {
          let data = null;
	  client.connect(
          (err, client) => {
            if (err) data = false;
            else {
              data = client.db(dbName);
            }
          },
          );
          return data;
      }
      this.db = connection(client);
    }
 
    isAlive() {
      return !!this.client;
    }


    async nbUsers() {
      try {
        const numUsers = await this.client.collection('users').estimatedDocumentCount({});
        return numUsers;
      } catch (err) {
        return (err);
      }
    }

    async nbFiles() {
       try {
        const numFiles = await this.client.collection('files').estimatedDocumentCount({});
        return numFiles;
       } catch (err) {
         return (err);
       }
    }

}


const dbClient = new DBClient();                                                                                          
module.exports = dbClient;

