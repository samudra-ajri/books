import express from 'express'
import { 
    createFavorite,
    deleteFavorite,
    getFavorites
} from '../controllers/favoriteBookController.js'

const router = express.Router()
router.route('/')
    .post(createFavorite)
    .get(getFavorites)
router.route('/:id')
    .delete(deleteFavorite)

export default router