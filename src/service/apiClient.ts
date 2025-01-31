import axios from 'axios';
import {config} from 'config';

const apiClient = (baseURL: string, token?: string) => {
  return axios.create({
    baseURL,
    withCredentials: true,
  });
};

export default apiClient(config.SERVER!);
