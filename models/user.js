const {Schema, model} = require('mongoose');
uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})

userSchema.plugin(uniqueValidator);
const UserModel = model('User', userSchema);

module.exports = {
    UserModel,
    userSchema

} 