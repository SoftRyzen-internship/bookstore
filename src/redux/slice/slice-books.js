import { createSlice } from '@reduxjs/toolkit';
import * as operations from 'redux/operations/operations-books';

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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(operations.getBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.books;
        state.count = payload.count;
        state.total = payload.total;
      })
      .addMatcher(
        action =>
          !action.type.startsWith('books/getBooks') &&
          action.type.startsWith('books') &&
          action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('books') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('books') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default booksSlice.reducer;
