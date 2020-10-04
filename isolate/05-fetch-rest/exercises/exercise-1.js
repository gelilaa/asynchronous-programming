'use strict';


const log = labeledLogger('Exercise 1');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = '/photos';
log('path: ', path);



const parseResponse = (response) => {
  log('response: ', response);
  return response.json();
};

const processData = (data) => {
  log('data: ', data);
  // write the rest ...

};

const testData = (actual) => {
  log('actual: ', actual);
  it('should have the correct title', () => {
    expect(actual.title).to.equal('error magni fugiat dolorem impedit molestiae illo ullam debitis');
  });
};

const handleRejection = (err) => {
  log(err);
};

const title = '/?title=error magni fugiat dolorem impedit molestiae illo ullam debitis';
const datatitle = processData(title);

fetch(origin + path)
  .then(parseResponse)
  .then(processData)
  .then(testData)
  .catch(handleRejection);



log('end of synchronous tasks');
