let users = require('../modules/users');

let controller = {
    findAll: function(req, res, next) {
        res.send(users.list);
      },
    findByUsername: function(req, res) {
        let user = users.findByUsername(req.params.username);
        if (user) {
          res.send(user);
        } else {
          res.send('User not found.');
        }
      },
}

module.exports = controller;