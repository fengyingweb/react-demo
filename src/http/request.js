import axios from 'axios';
import NProgress from 'nprogress';
import {message} from 'antd';

// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {'Pragma': 'no-cache', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json'}
});
// console.log(window.location.hash);
// request拦截器
service.interceptors.request.use(config => {
  NProgress.start();
  return config;
}, error => {
  NProgress.done();
  console.log(error);
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    NProgress.done();
    return response.data;
  },
  error => {
    NProgress.done();
    const response = error.response;
    if (response) {
      switch (response.status) {
        case 401:
          window.location.href = '/login';
          break;
        case 500:
        message.error('系统异常');
          break;
      }
    }
    console.log('异常:', error);
    return Promise.reject(error);
  }
);

export default service;
