// import axios from 'axios';
import axiosInstance from './axiosInstance';
//
// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true,
// });

export async function changeUserData(body) {
  try {
    const response = await axiosInstance.patch('/users', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function currentUser() {
  try {
    const response = await axiosInstance.get('/users/current');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(body) {
  try {
    const response = await axiosInstance.post('/users/login', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function logOut() {
  try {
    const response = await axiosInstance.post('/users/logout', {});
    return response;
  } catch (error) {
    throw error;
  }
}
export async function registerUser(body) {
  try {
    const response = await axiosInstance.post('/users/register', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePassword(body) {
  try {
    const response = await axiosInstance.patch('/users/update-password', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function refresh() {
  try {
    const response = await axiosInstance.post('/users/refresh', {});
    return response.data;
  } catch (error) {
    throw error;
  }
}
