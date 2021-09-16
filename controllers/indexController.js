const posts = require('../modules/posts');

const controller = {
    index: function(req, res, next) {
        res.render('index', { posts: posts.lista });
      }
}

module.exports = controller;