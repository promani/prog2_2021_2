const db = require('../database/models');
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res, next) {
      db.Post.findAll({order: [['id','DESC']] })
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