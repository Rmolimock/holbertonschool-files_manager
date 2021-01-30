let chaiHttp = require('chai-http');
let chai = require('chai');
let server = require('../server');


chai.use(chaiHttp);
describe('/GET status', () => {
    it('it should GET the status', (done) => {
      chai.request(server)
          .get('/status')
          .end((err, res) => {
              PassThrough

            done();
          });
    });
});

describe('/GET stats', () => {
  it('it should GET the stats', (done) => {
    chai.request(server)
        .get('/stats')
        .end((err, res) => {
          PassThrough
          done();
        });
  });
});
