let posts = {
    lista: [
            {
                id: 1,
                contenido: "Hola, estoy tomando mate al lado de la pileta.",
                imagen: "/images/mates.jpg",
                createdAt: "15 de febrero",
                user_id: 1,
                user: { id: 1, username: 'promani', firstName: 'Pehuen' },
                likes: 15,
                comentarios: [
                    { contenido: 'ahh tranca vos eh..', fecha: '15 de febrero', likes: 0 },
                    { contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 }
                ],
            },
            {
                id: 2,
                contenido: "Hola, estoy tomando mate al lado de la pileta.",
                imagen: "/images/mates.jpg",
                createdAt: "15 de febrero",
                user_id: 1,
                user: { id: 1, username: 'promani', firstName: 'Pehuen' },
                likes: 15,
                comentarios: [
                    { contenido: 'ahh tranca vos eh..', fecha: '15 de febrero', likes: 0 },
                    { contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 }
                ],
            },
            {
                id: 3,
                contenido: "Hola, estoy tomando mate al lado de la pileta.",
                imagen: "/images/mates.jpg",
                createdAt: "15 de febrero",
                user_id: 1,
                user: { id: 1, username: 'promani', firstName: 'Pehuen' },
                likes: 15,
                comentarios: [
                    { contenido: 'ahh tranca vos eh..', fecha: '15 de febrero', likes: 0 },
                    { contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 }
                ],
            },
            {
                id: 4,
                contenido: "Hola, estoy tomando mate al lado de la pileta.",
                imagen: "/images/mates.jpg",
                createdAt: "15 de febrero",
                user_id: 1,
                user: { id: 1, username: 'promani', firstName: 'Pehuen' },
                likes: 15,
                comentarios: [
                    { contenido: 'ahh tranca vos eh..', fecha: '15 de febrero', likes: 0 },
                    { contenido: 'que linda pileta', fecha: '15 de febrero', likes: 2 }
                ],
            },
          ],
    find: function (id) {
        for (let i = 0; i < posts.lista.length; i++) {
            if (posts.lista[i].id == id) {
                return posts.lista[i];
            }
        }
    },
    findByUser: function (userId) {
        let result = [];
        for (let i = 0; i < posts.lista.length; i++) {
            if (posts.lista[i].user_id == userId) {
                result.push(posts.lista[i]);
            }
        }
        return result;
    },
}


module.exports = posts;