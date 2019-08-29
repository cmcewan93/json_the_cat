const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, 'Breed not found');
      } else
        callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };