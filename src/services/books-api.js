import { http } from './api';

const baseURL = process.env.REACT_APP_BASE_API_URL;

export const getBooks = (page = 1) => {
  return http.get(`${baseURL}/books?page=${page}`);
};

export const getBookDetails = id => {
  return http.get(`${baseURL}/books${id}`);
};
