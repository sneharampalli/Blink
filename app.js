var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAiWS-k2v0QtmRIQg6cJsFJ0SkLtKjgFjo'
});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});