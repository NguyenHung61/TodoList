import axios from "axios";


export const createApiClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001'
  });
  axiosInstance.interceptors.request.use((config) => {
    return config
  })
  return axiosInstance
}