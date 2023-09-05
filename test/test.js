const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
let cat = {
    title: "Test Cat",
    subTitle: "Sub Test Cat",
    path: "kitten.jpg",
    description: "This is a test cat"
};

chai.use(chaiHttp);

//test will start after database has been connected.
before(function(done) {
    this.timeout(20000);
    const client = require('../dbConnection');
    client.connect(err => {
        if (err) done(err);
        else done();
    });
});

describe('/GET cats', () => {
    it('it should GET all the cats', (done) => {
        chai.request(server)
            .get('/api/cat')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.should.be.a('array');
                done();
            });
    });
});

describe('/POST cat', () => {
    it('it should POST a new cat', (done) => {
        chai.request(server)
            .post('/api/cat')
            .send(cat)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                done();
            });
    });
});

describe('/DELETE/:id cat', () => {
    it('it should DELETE a cat given the id', (done) => {
        let id = "64e451d9dfa046248ff0d6a1"; 

        chai.request(server)
            .delete('/api/cat/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Cat deleted successfully');
                done();
            });
    });
});