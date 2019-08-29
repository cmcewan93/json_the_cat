const { fetchBreedDescription } = require('./breedFetcher');
const breedName = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});