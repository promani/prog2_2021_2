module.exports= (sequelize,dataTypes)=>{

    const alias = 'Post';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        content: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName:'post',
        timestamps: false,
        underscored: true,
    }


    const Post = sequelize.define(alias,cols,config)
    
    Post.associate = function(models) {
        Post.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'post_id'
        });
        Post.belongsTo(models.User, {
            as: 'author',
            foreignKey: 'user_id'
        });
    };

    return Post
}