import axios from "axios";

axios.interceptors.request.use(function (config) {
  if (localStorage.token !== undefined) {
    config.headers["Authorization"] = `Bearer ${localStorage.token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if (error.response.status === 401) {
    console.log('error 401');
  }
  else if (error.response.status === 500) {
    window.location.href = window.location.origin + '/error-500'
  }

  return Promise.reject(error);
});

export default axios;