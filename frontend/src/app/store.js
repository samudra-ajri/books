import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/bookSlice'
import favoriteBookReducer from '../features/favorites/favoriteSlice'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    favoriteBooks: favoriteBookReducer
  },
});
