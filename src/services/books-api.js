import { http } from './api';

const baseURL = 'https://books-be.herokuapp.com/api';

export const getBooks = (page = 1) => {
  return http.get(`${baseURL}/books?page=${page}`);
};

export const getBookDetails = id => {
  return http.get(`${baseURL}/books/${id}`);
};

export const updateBook = (id, book) => {
  return http.put(`${baseURL}/books/${id}`, book);
};

export const deleteBook = id => {
  return http.delete(`${baseURL}/books/${id}`);
};
