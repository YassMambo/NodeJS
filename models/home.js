const {Schema, model} = require('mongoose');

/*const userSchema = new Schema({ 
    firstname: String,
    lastname: String,
})*/
const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
       type:  Schema.Types.ObjectId,
       ref: 'User',
       required: true
    }
})

//const UserModel = model('User', userSchema);
const ArticleModel = model('Article', articleSchema);

module.exports = {
    ArticleModel
} 