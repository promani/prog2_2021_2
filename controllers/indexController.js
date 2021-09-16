const posts = require('../modules/posts');

const controller = {
    index: function(req, res, next) {
        res.render('index', { posts: posts.lista });
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