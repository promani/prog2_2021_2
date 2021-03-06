module.exports = (sequelize, dataTypes) => {
    const alias = 'Comment';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        post_id: {
            type: dataTypes.INTEGER
        },
        content: {
            type: dataTypes.STRING
        }
    }
    
    const config = {
        tableName: 'comment',
        timestamps: false,
        underscored: true
    }
    
    const Comment = sequelize.define(alias, cols, config)

    Comment.associate = function(models) {
        Comment.belongsTo(models.Post, {
            as: 'post',
            foreignKey: 'post_id'
        });
        Comment.belongsTo(models.User, {
            as: 'author',
            foreignKey: 'user_id'
        });
    };
    
    return Comment
}

