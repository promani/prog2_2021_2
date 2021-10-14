const db = require('../database/models');
const op = db.Sequelize.Op;

let controller = {
    detalle: async function(req, res) {
      const user = await db.User.findByPk(req.params.username);
      const posts = await db.Post.findAll({where: {user_id: req.params.username}});

      res.render('users/detalle', { user, posts });
    },
}

module.exports = controller;