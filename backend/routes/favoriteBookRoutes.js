import express from 'express'
import { 
    createFavorite
} from '../controllers/favoriteBookController.js'

const router = express.Router()
router.route('/')
    .post(createFavorite)

export default router