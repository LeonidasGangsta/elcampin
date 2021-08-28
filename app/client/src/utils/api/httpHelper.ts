/* eslint-disable no-console */
import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://elcampin-api.herokuapp.com/';

const dataExtractor = (axiosPromise: AxiosResponse) => ({
  data: axiosPromise.data,
  status: axiosPromise.status,
  statusText: axiosPromise.statusText,
});

export const httpHelper = {
  get: async (url: string, params?: { [key: string]: string }) => {
    try {
      const response = await axios.get(`${API_URL}${url}`, params);
      return dataExtractor(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  post: async (url: string, params?: { [key: string]: string }) => {
    try {
      const response = await axios.post(`${API_URL}${url}`, params);
      return dataExtractor(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  delete: async (url: string, params?: { [key: string]: string }) => {
    try {
      const response = await axios.delete(`${API_URL}${url}`, params);
      return dataExtractor(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
