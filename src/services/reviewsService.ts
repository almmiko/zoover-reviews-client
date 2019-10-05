import { apiClient } from '../api/clients/clients';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments } from '../typings/reviewsComments';

const getReviewStats = async (): Promise<ReviewStats> => {
  const response = await apiClient.get(
    `v1/reviews/stats`);

  return response.data;
};

const getReviewComments = async (page = 1, limit = 20): Promise<ReviewsComments> => {
  const response = await apiClient.get(
    `v1/reviews?page=${page}&limit=${limit}`);

  return response.data;
};

export default {
  getReviewStats,
  getReviewComments,
}
