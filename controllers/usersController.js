const db = require('../database/models');
const op = db.Sequelize.Op;

let controller = {
    detalle: async function(req, res) {
      const user = await db.User.findByPk(req.params.id, {
        include: [{association: 'posts'}]
      });

      res.render('users/detalle', { user });
    },
    profile: async function(req, res) {
      if (!req.session.user) {
        res.send('NO ESTAS LOGUEADO')
      }
      const user = await db.User.findByPk(req.session.user.id, {
        include: [{association: 'posts'}]
      });

      res.render('users/detalle', { user });
    }
}

module.exports = controller;