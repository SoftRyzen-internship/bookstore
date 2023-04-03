import axios from 'axios';

export async function sendFormData(values) {
  try {
    const response = await axios.patch(
      'http://localhost:5000/api/users',
      values,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function currentUser() {
  try {
    const response = await axios.get(
      'http://localhost:5000/api/users/current',
      {},
      {
        withCredentials: true,
      }
    );
    return response.data?.user;
  } catch (error) {
    throw error;
  }
}
export async function loginUser(values) {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/login',
      {
        password: 'qwerTY234',
        email: 'petrolhaus2022@gmail.com',
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function updatePassword(body) {
  try {
    const response = await axios.patch(
      'http://localhost:5000/api/users/update-password',
      body,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
