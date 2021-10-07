const db = require('../database/models');

const controller = {
    index: function(req, res, next) {
      db.Post.findAll()
        .then((posts) => {
          res.render('index', { posts });
        })
        .catch((error) => {
          res.send(error)
        })
    },
    login: function(req, res, next) {
      res.render('login');
    },
    register: function(req, res, next) {
      res.render('register');
    },
    search: function(req, res, next) {
      res.render('search', { criteria: req.query.criteria });
    },
}

module.exports = controller;