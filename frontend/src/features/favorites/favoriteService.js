import axios from 'axios'

const API_URL = '/api/favorites/'

// Get all favorite books
const getFavoriteBooks = async () => {
    const response = await axios.get(API_URL)
    return response.data
  }

const favoriteBooksService = {
    getFavoriteBooks
}

export default favoriteBooksService
