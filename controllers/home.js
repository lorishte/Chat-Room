const mongoose = require('mongoose');

module.exports = {
    indexGet: (req, res) => {
          res.render('home/index');
  }
};