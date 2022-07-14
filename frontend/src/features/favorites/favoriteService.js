import axios from 'axios'

const API_URL = '/api/favorites/'

// Create new favorite books
const createFavoriteBook = async (bookData) => {
  const response = await axios.post(API_URL, bookData)
  return response.data
}

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
  createFavoriteBook,
  getFavoriteBooks,
  deleteFavoriteBook
}

export default favoriteBooksService
