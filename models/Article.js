const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema( {
    title: {
        type: String,
        required: true,
        minlength:2
    },
    article: {
        type: String,
        required: true,
        minlength:2
    }
    

}, { timestamps: true})

const Article = mongoose.model('Article', articleSchema)

module.exports = {
    Article
}