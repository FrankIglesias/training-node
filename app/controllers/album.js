const Album = require('../services/album');

exports.getAlbums = (req, res, next) => {
  Album.getAlbums().then(response => {
    res.status(200).send(response);
  });
};
