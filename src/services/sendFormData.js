import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export async function sendFormData(body) {
  try {
    const response = await api.patch('/users', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function currentUser() {
  try {
    const response = await api.get('/users/current');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(body) {
  try {
    const response = await api.post('/users/login', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function logOut() {
  try {
    const response = await api.post('/users/logout', {});
    return response;
  } catch (error) {
    throw error;
  }
}
export async function registerUser(body) {
  try {
    const response = await api.post('/users/register', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePassword(body) {
  try {
    const response = await api.patch('/users/update-password', body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
