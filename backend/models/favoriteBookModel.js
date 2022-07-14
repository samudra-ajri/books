const mongoose = require('mongoose')

const favoriteBookSchema = mongoose.Schema({
    googleBookId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    authors: {
        type: [String],
        required: true
    },
    averageRating: {
        type: Number
    },
    ratingsCount: {
        type: Number
    }
}, {
    timestamps: true
})

const FavoriteBook = mongoose.model('FavoriteBook', favoriteBookSchema)

module.exports =  FavoriteBook