const request = require('request');

var getWeather = (lat, lng, callback) => {

var address = encodeURIComponent(address);
  request({
    url: `https://api.forecast.io/forecast/a53765a96ddb22968682ec52ac43f01f/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // callback(body.currently.temperature);
      callback(undefined, {
        temperature: body.currently.temperature,
        humidity: body.currently.humidity,
        summary: body.currently.summary
      });
    } else {
      callback('Unable to connect');
    }

  });

};

module.exports.getWeather = getWeather;
