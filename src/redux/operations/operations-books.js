import { createAsyncThunk } from '@reduxjs/toolkit';
import * as booksApi from 'services/books-api';

export const getBooks = createAsyncThunk('books/getBooks', async page => {
  const response = await booksApi.getBooks(page);
  return response.data;
});

export const getBookDetails = createAsyncThunk('books/getBook', async id => {
  const response = await booksApi.getBookDetails(id);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async book => {
  await booksApi.addBook(book);
  return book;
});

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ id, book }, thunkAPI) => {
    const response = await booksApi.updateBook(id, book);
    return response.data;
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    await booksApi.deleteBook(id);
    return id;
  }
);
