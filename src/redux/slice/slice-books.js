import { createSlice } from '@reduxjs/toolkit';
import * as extraReducersBooks from 'redux/reducers/reducers-books';

const initialState = {
  items: [],
  count: null,
  total: null,
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    ...extraReducersBooks.getBooks,
    ...extraReducersBooks.addBook,
    ...extraReducersBooks.updateBook,
    ...extraReducersBooks.deleteBook,
  },
});

export default booksSlice.reducer;
