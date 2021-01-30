const MongoClient = require('mongodb').MongoClient;                                                                             

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const dbName = process.env.DB_DATABASE || 'files_manager'; 
let d = new Object();
d['one'] = 1
console.log(d)
class DBClient {
    constructor(d) {
      this.db = null;
      const url = "mongodb://" + host + ":" + port + "/" + dbName
      const client = new MongoClient(url, { useUnifiedTopology: true });
      function connection(client) {
	  client.connect(
          (err, client) => {
            if (err) d['q'] = false;
            else {
              d['q'] = client.db(dbName); // only create collections if they don't exist
	      console.log('created!    ' + d['q']);
	      if (!d['q'].collection('users')) {
	        d['q'].createCollection('users');
	      }
              if (!d['q'].collection('files')) {
                d['q'].createCollection('files');
	      }
            }
          },
          );
	  console.log(d['q'] + ' is client');
      }
      this.db = connection(client);
	    console.log('this' + this.db);
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


const dbClient = new DBClient(d);
module.exports = dbClient;


