import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import favoriteBooksService from './favoriteService'

const initialState = {
  books: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all favorite books
export const getFavoriteBooks = createAsyncThunk(
  'favoriteBooks/getAll',
  async (_, thunkAPI) => {
    try {
      return await favoriteBooksService.getFavoriteBooks()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete a favorite book
export const deleteFavoriteBook = createAsyncThunk(
  'favoriteBooks/delete',
  async (id, thunkAPI) => {
    try {
      return await favoriteBooksService.deleteFavoriteBook(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const favoriteBookSlice = createSlice({
  name: 'favoriteBook',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteBooks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFavoriteBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books = action.payload
      })
      .addCase(getFavoriteBooks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteFavoriteBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteFavoriteBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books = state.books.filter(
          (book) => book._id !== action.payload.id
        )
      })
      .addCase(deleteFavoriteBook.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = favoriteBookSlice.actions
export default favoriteBookSlice.reducer
