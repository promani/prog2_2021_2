

let users = {
    list: [
        {
            username: 'promani',
            name: 'Pehuen',
            surname: 'Romani',
            age: 31,
            city: 'Longchamps'
        },
        {
            username: 'fromani',
            name: 'Facundo',
            surname: 'Romani',
            age: 31,
            city: 'Cambridge'
        }
    ],
    findByUsername: function (username) {
        for (let index = 0; index < this.list.length; index++) {
            if (this.list[index].username == username) {
                return this.list[index];
            }
        }
    }
}


module.exports = users;