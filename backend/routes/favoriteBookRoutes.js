const express = require ('express')
const { 
    createFavorite,
    deleteFavorite,
    getFavorites
} = require ('../controllers/favoriteBookController')

const router = express.Router()
router.route('/')
    .post(createFavorite)
    .get(getFavorites)
router.route('/:id')
    .delete(deleteFavorite)

module.exports = router
