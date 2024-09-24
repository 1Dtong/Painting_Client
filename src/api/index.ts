import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/api"; // 统一设置请求的 baseURL
axios.defaults.headers.common["Content-Type"] = "application/json"; // 设置所有请求的 Content-Type

// 具体的 API 请求函数
export const fetchCategories = () => {
  return axios.get('/categories');
}

export const fetchDetailsByCategoryId = (categoryId: number) => {
  return axios.get(`/details/${categoryId}`);
}

export const fetchGenerateImage = (inputText: string) => {
  return axios.post('/generate-image', { inputText });
}
