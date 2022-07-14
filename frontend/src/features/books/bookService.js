import axios from 'axios'

// Search books by google apis
const getBooks = async (keyword) => {
  const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + keyword)
  return response.data
}

const bookService = {
    getBooks
}

export default bookService
