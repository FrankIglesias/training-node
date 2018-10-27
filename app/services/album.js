const request = require('request-promise');

exports.getAlbums = () => request('https://jsonplaceholder.typicode.com/albums');
