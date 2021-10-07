const db = require('../database/models');

const controller = {
    detalle: async function(req, res) {
        const post = await db.Post.findByPk(req.params.id)
        if (!post) {
          return res.render('error');
        }
        const comments = await db.Comment.findAll({ where: { post_id: req.params.id } })

        res.render('posts/detalle', { post, comments });
    },
    publish: function(req, res) {
      res.render('posts/publish');
    }
}

module.exports = controller;