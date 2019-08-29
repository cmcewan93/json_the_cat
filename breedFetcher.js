let breed = process.argv.slice(2);
const request = require('request');
let searchString = `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`;

request(searchString, (error, response, body) => {
  let data = JSON.parse(body);
  //console.log(body);
  if (error) {
    console.log('SHOWING ERROR: ' + error);
  } else if (data.length === 0) {
    console.log('Breed not found!');
  } else {
    console.log(data[0].description);
  }
  
});