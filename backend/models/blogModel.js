const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const blogSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    body: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Blog',blogSchema)