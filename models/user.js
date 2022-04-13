const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const UserModel = model('User', userSchema);


module.exports = {
    UserModel,

} 