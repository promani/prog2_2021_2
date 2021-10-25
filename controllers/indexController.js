const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

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
          { content: { [op.like]: "%"+req.query.criteria+"%"} },
          { image: { [op.like]: "%"+req.query.criteria+"%"} },
        ]
        }}
      )

      // []
      res.render('search', { posts, criteria: req.query.criteria });
    },
}

module.exports = controller;