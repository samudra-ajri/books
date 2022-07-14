import axios from 'axios'

const API_URL = '/api/favorites/'

// Get all favorite books
const getFavoriteBooks = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Delete favorite books
const deleteFavoriteBook = async (favoriteBookId) => {
  const response = await axios.delete(API_URL + favoriteBookId)
  return response.data
}

const favoriteBooksService = {
  getFavoriteBooks,
  deleteFavoriteBook
}

export default favoriteBooksService
