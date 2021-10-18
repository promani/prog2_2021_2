module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        surname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
    }
    
    const config = {
        tableName: 'user',
        timestamps: false,
        underscored: true
    }
    
    const User = sequelize.define(alias, cols, config)

    return User
}

