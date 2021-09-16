const posts = require('../modules/posts');

const controller = {
    detalle: function(req, res) {
        const post = posts.find(req.params.id);
        if (!post) {
          return res.render('error');
        }

        res.render('posts/detalle', { post });
    },
    publish: function(req, res) {
      res.render('posts/publish');
    }
}

module.exports = controller;