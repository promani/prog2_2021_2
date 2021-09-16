

let users = {
    list: [
        {
            id: 1,
            username: 'promani',
            name: 'Pehuen',
            surname: 'Romani',
            age: 31,
            city: 'Longchamps'
        },
        {
            id: 2,
            username: 'fromani',
            name: 'Facundo',
            surname: 'Romani',
            age: 31,
            city: 'Cambridge'
        }
    ],
    findByUsername: function (username) {
        for (let index = 0; index < users.list.length; index++) {
            if (users.list[index].username == username) {
                return users.list[index];
            }
        }
    }
}


module.exports = users;