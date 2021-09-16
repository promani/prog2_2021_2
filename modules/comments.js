let users = require('./users');

let comments = {
    lista: [
        { post_id: 1, user: users.findByUsername('fromani'), contenido: 'ahh tranca vos eh..', fecha: '15 de febrero', likes: 0 },
        { post_id: 1, user: users.findByUsername('promani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
        { post_id: 1, user: users.findByUsername('promani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
        { post_id: 2, user: users.findByUsername('promani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
        { post_id: 3, user: users.findByUsername('fromani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
        { post_id: 3, user: users.findByUsername('fromani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
        { post_id: 3, user: users.findByUsername('promani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
        { post_id: 4, user: users.findByUsername('fromani'), contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 },
    ],
    findByPost: function (postId) {
        let result = [];
        for (let i = 0; i < comments.lista.length; i++) {
            if (comments.lista[i].post_id == postId) {
                result.push(comments.lista[i]);
            }
        }
        return result;
    },
}

module.exports = comments;