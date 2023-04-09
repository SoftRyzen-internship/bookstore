import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://book-beck-user.onrender.com/api',
  withCredentials: true,
});

// додаємо інтерсептор, що буде перехоплювати помилки від сервера
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (originalRequest.url !== 'user/current' && error.response) {
      // перевіряємо, що отримана помилка має код 401 (невалідний токен)
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // відправляємо запит на сервер з рефреш токеном
          await axiosInstance({
            ...originalRequest,
            method: 'post',
            url: '/users/refresh',
          });
          // зберігаємо новий токен у localStorage
          // localStorage.setItem('accessToken', response.data.accessToken);
          // виконуємо оригінальний запит з оновленим токеном
          return axiosInstance(originalRequest);
        } catch (error) {
          // якщо запит на оновлення токену не вдався, перенаправляємо користувача на сторінку логіну
          // window.location.replace('login');
          return Promise.reject(error);
        }
      }

      // якщо помилка не має коду 401 або запит на оновлення токену вже виконувався, повертаємо отриману помилку
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
