import { AxiosResponse } from 'axios';
import { apiClient } from '../api/clients/clients';

const getReviewStats = async (): Promise<AxiosResponse<any>> => {
  const response = await apiClient.get(
    `v1/reviews/stats`);

  return response.data;
};

const getReviewComments = async (page = 1, limit = 20): Promise<AxiosResponse<any>> => {
  const response = await apiClient.get(
    `v1/reviews?page=${page}&limit=${limit}`);

  return response.data.resources;
};

export default {
  getReviewStats,
  getReviewComments,
}
