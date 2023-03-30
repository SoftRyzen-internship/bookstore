import axios from 'axios';

export const http = {
  get(url, options) {
    return axios.get(url, options);
  },
  post(url, data, options) {
    return axios.post(url, data, options);
  },
  delete(url, options) {
    return axios.delete(url, options);
  },
  put(url, data, options) {
    return axios.put(url, data, options);
  },
  patch(url, data, options) {
    return axios.patch(url, data, options);
  },
};
