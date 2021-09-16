let users = require('../modules/users');
let postsModule = require('../modules/posts');

let controller = {
    detalle: function(req, res) {
      const user = users.findByUsername(req.params.username);
      const posts = postsModule.findByUser(user.id);

      res.render('users/detalle', { user, posts });
    },
}

module.exports = controller;