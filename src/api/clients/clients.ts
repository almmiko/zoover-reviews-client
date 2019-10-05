import apiEndpoins from '../endpoints';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import createClient from './clientFactory';

const apiClient = createClient({
  baseUrl: apiEndpoins.API_URL,
  headers: {
    'cache-control': 'no-cache',
  },
});

const apiClientInterceptorsReq = (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  };
};

const interceptorsReqError = (error: any) => {
  Promise.reject(error);
};

const interceptorsRes = (response: AxiosResponse) => {
  return response;
};

const interceptorsResError = (error: AxiosError) => {
  if (!error.response) { return Promise.reject('Empty error response'); }
  return Promise.reject(error);
};

apiClient.interceptors.request.use(
  apiClientInterceptorsReq,
  interceptorsReqError,
);

apiClient.interceptors.response.use(interceptorsRes, interceptorsResError);

export { apiClient };
