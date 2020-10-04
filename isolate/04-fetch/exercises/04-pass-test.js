'use strict';


const log = labeledLogger('4. Pass Test');
const expect = chai.expect;

const origin = window.location.origin;
const path = '/isolate/04-fetchs/fake-api/animals/mushes.json';
const requestURL = origin + path;
log("requestURL: ", requestURL);



const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};

const filterMushes = (mushes) => {
  // write me!
  log('mushes',mushes)
  const keys = Object.keys(mushes);
  let mush = keys.filter

};

const testFilteredMushes = (trueMush) => {
  log('trueMush: ', trueMush);
  it('these mush are true', () => {
    expect(trueMush).to.deep.equal(['grey', 'orange']);
  });
};

const handleRejection = (err) => {
  log(err);
};


// careful, this might not be right
fetch(requestURL)
  .then(parseResponse)
  .then(testFilteredMushes)
  .then(filterMushes)
  .catch(handleRejection);





log('end of synchronous tasks');


