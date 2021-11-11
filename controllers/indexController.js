const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const validateUser = function (req) {
  const errors = [];
  if (req.body.password.length < 5) {
    errors.push('LA CONSTRASEÑA ES INSEGURA');
  }
  if (!req.body.surname) {
    errors.push('EL APELLIDO ES REQUERIDO');
  }
  return errors;
}

const controller = {
    index: function(req, res, next) {
      db.Post.findAll({ 
        include: [
          { association: 'author' },
          { association: 'likes' },
          { association: 'comments', include: [{ association: 'author' }] }
        ], order: [['id','desc']]})
        .then((posts) => {
          res.render('index', { posts });
        })
        .catch((error) => {
          res.send(error)
        })
    },
    logout: function(req, res, next) {
      res.clearCookie('user');
      req.session.user = null;
      res.redirect('/');
    },
    login: async function(req, res, next) {
      if (req.method == 'POST') {
        const user = await db.User.findOne({ where: {username: req.body.username}});
        if (!user) {
          res.send('NO EXISTE EL USUARIO')
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = user;
          res.cookie('user', user, { maxAge: 1000 * 60 * 60 * 24 * 30 })
          res.redirect('/');
        } else {
          res.send('LA CONSTRASEÑA ES INCORRECTA')
        }
      } else {
        res.render('login');
      }
    },
    register: function(req, res, next) {
      res.render('register');
    },
    store: async function(req, res) {
      const errors = validateUser(req);
      if (errors.length > 0) {
        return res.render('register', { errors });
      }
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      db.User.create(req.body)
        .then(post => {
          res.redirect('/login');
        }).catch(error => {
          return res.render(error);
        })
    },
    search: async function(req, res, next) {
      const posts = await db.Post.findAll({ where: {
        [op.or]: [
          { content: { [op.like]: "%"+req.query.criteria+"%"} }
        ]
        }}
      )

      // []
      res.render('search', { posts, criteria: req.query.criteria });
    },
    like: function(req, res) {
      if (!req.session.user) {
        res.redirect('/posts/'+req.params.id);
      }
      db.Like.create({
        user_id: req.session.user.id,
        post_id: req.params.id 
      }).then(like => {
        res.redirect('/#post_'+req.params.id);
      }).catch(error => {
        return res.send(error);
      })
    },
    dislike: function(req, res) {
      if (!req.session.user) {
        res.redirect('/posts/'+req.params.id);
      }
      db.Like.destroy(
        { where: { user_id: req.session.user.id, post_id: req.params.id }
      })
      .then(() => {
        res.redirect('/#post_'+req.params.id);
      }).catch(error => {
        return res.render(error);
      })
    },
}

module.exports = controller;