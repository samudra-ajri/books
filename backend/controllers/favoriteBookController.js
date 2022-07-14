const asyncHandler = require ('express-async-handler')
const FavoriteBook = require ('../models/favoriteBookModel')

// @desc    Create new favorite book
// @route   POST /api/favorites
// @access  Public
const createFavorite = asyncHandler(async (req, res) => {
    const { 
        googleBookId, 
        title, 
        thumbnail, 
        authors, 
        averageRating, 
        ratingsCount
    } = req.body

    const exists = await FavoriteBook.findOne({ googleBookId })
    if (exists) {
        res.status(404)
        throw new Error('book already on favorite')
    }

    const favorite = await FavoriteBook.create({ 
        googleBookId, 
        title, 
        thumbnail, 
        authors, 
        averageRating, 
        ratingsCount
    })

    if (favorite) {
        res.status(201).json(favorite._doc)
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

// @desc    Get all favorite books
// @route   GET /api/favorites
// @access  Public
const getFavorites = asyncHandler(async (req, res) => {
    const favorites = await FavoriteBook.find({})
        .sort('-createdAt')

    res.status(200).json({ 
        total: favorites.length, 
        books: favorites 
    })
})

// @desc    Delete a favorite book
// @route   DELETE /api/favorites/:id
// @access  Public
const deleteFavorite = asyncHandler(async (req, res) => {
    const favorite = await FavoriteBook.findById(req.params.id)
    if (favorite) {
        await favorite.remove()
        res.json({ id: req.params.id })
    } else {
        res.status(404)
        throw new Error('Book not found')
    }
})

module.exports = { 
    createFavorite,
    getFavorites,
    deleteFavorite
}