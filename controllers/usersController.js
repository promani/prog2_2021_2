const db = require('../database/models');
const op = db.Sequelize.Op;

let controller = {
    detalle: async function(req, res) {
      const user = await db.User.findByPk(req.params.id, {
        include: [{all: true}],
        order: [['posts','id','desc']]
      });

      res.render('users/detalle', { user });
    },
    profile: async function(req, res) {
      if (!req.session.user) {
        res.send('NO ESTAS LOGUEADO')
      }
      const user = await db.User.findByPk(req.session.user.id, {
        include: [{all: true}]
      });

      res.render('users/detalle', { user });
    },
    follow: function(req, res) {
      if (!req.session.user) {
        res.redirect('/users/'+req.params.id);
      }
      db.Follow.create({
        follower_id: req.session.user.id,
        following_id: req.params.id 
      }).then(follow => {
        res.redirect('/users/'+req.params.id);
      }).catch(error => {
        return res.send(error);
      })
    },
    unfollow: function(req, res) {
      if (!req.session.user) {
        res.redirect('/users/'+req.params.id);
      }
      db.Follow.destroy(
        { where: { follower_id: req.session.user.id, following_id: req.params.id }
      })
      .then(() => {
        res.redirect('/users/'+req.params.id);
      }).catch(error => {
        return res.render(error);
      })
    },
}

module.exports = controller;