const posts = require('../modules/posts');

const controller = {
    detalle: function(req, res) {
        const post = posts.find(req.params.id);
        if (!post) {
          return res.render('posts/error');
        }

        res.render('posts/detalle', { post });
      }
}

module.exports = controller;