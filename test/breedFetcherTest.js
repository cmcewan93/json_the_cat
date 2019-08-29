// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('should console log an error when an invalid breed is passed into the paramaters', (done) => {
    fetchBreedDescription('https://api.thecatapi.com/v1/breeds/search?q=dsafdsafasdf', (err, desc) => {

      assert.notEqual(desc, null); //check to see it return a desc of search error
      done();
    });
  });
});