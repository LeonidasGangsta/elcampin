/* eslint-disable no-console */
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const httpHelper = {
  get: async (url: string, params?: { [key: string]: string }) => {
    try {
      const { data, status, statusText } = await axios.get(`${API_URL}${url}`, params);
      return {
        data,
        status,
        statusText,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  post: axios.post,
  delete: axios.delete,
};
