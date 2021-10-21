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
    },
    store: function(req, res) {
      db.Post.create({
        content: req.body.content
      }).then(post => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
    },
    edit: async function(req, res) {
      const post = await db.Post.findByPk(req.params.id)
      if (!post) {
        return res.render('error');
      }

      res.render('posts/edit', {post});
    },
    update: function(req, res) {
      db.Post.update(req.body, { where: { id: req.params.id }}).then(post => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
    },
    delete: function(req, res) {
      // Chequear que sea el owner
      db.Post.destroy({ where: { id: req.params.id }})
      .then(() => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
    },
    comment: function(req, res) {
      db.Comment.create({
        ...req.body,
        post_id: req.params.id,
        user_id: '2'
      }).then(post => {
        res.redirect('/posts/'+req.params.id);
      }).catch(error => {
        return res.render(error);
      })
    },
}

module.exports = controller;