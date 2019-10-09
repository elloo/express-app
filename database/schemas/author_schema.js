const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-binary'],
        default: 'Non-binary'
    }
});

module.exports = AuthorSchema;