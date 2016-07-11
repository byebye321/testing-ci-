/*globals describe it */
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

describe('GET /candies', () => {
  it('should return a 200 response', (done) => {
    api.get('/candies')
    .set('Accept', 'application/json')
    .expect(200, done);
  });
  it('should return an array', (done) => {
    api.get('/candies')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null');
      expect(response.body).to.be.an('array');
      done();
    });
  });
  it('should return an object that has a field called "name"', (done) => {
    api.get('/candies')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null');
      expect(response.body[0]).to.have.property('name');
      done();
    });
  });
});

describe('GET /candies:id', () => {
  it('should return a 200 response', (done) => {
    api.get('/candies')
    .set('Accept', 'application/json')
    .expect(200, done);
  });
  it('should return an object containing the fields "name" and "color"', (done) => {
    api.get('/candies/1')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null');
      expect(response.body).to.have.property('name')
      expect(response.body).to.have.property('color');
      done();
    });
  })
})

describe('POST /candies', () => {
  before((done) => {
    api.post('/candies')
    .set('Accept', 'application/json')
    .send({
      'name': 'lollipop',
      'color': 'red'
    }).end(done);
  });
  it('should add a candy object to the collection and return it', (done) => {
    api.get('/candies')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null');
      // expect(response.body.length).to.equal(5)
      expect(response.body[response.body.length - 1].name).to.equal('lollipop');
      done();
      });
    it ('should add a new candy to the database', (done) => {
      api.post('/candies')
      .expect()
       done();
    });
  });

  describe('PUT /candies', () => {
    it('should return a 200 response', (done) => {
      api.put('/candies')
      .set('Accept', 'application/json')
      .expect(200, done);
    });
    // it('should update candy document', (done) => {
    //   api.put('/candies')
    //   .set('Accept', 'application/json')
    //   .end((error, response) => {
    //     expect(error).to.be.a('null');
    //     expect(response.body).to.have.property('name','color');
    //     done();
    //   });
});

  describe('DELETE /candies/:id', () => {
    it ('should remove a candy document', (done) => {
    api.delete('/candies/:id')
    .expect(200, done)
     done();
    })
  })
})
