import { apiClient } from '../api/clients/clients';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments } from '../typings/reviewsComments';
import { encodeQuery } from '../api/utils/utils';

export type Query = {
  page?: number,
  limit?: number,
  sortBy?: string,
  order?: string,
  traveledWith?: string,
}

const getReviewStats = async (): Promise<ReviewStats> => {
  const response = await apiClient.get(
    `v1/reviews/stats`);

  return response.data;
};

const getReviewComments = async (query: Query): Promise<ReviewsComments> => {
  const {
    page = 1,
    limit = 20,
    sortBy = 'entryDate',
    order = 'desc',
    traveledWith
  } = query;

  const queryParams = encodeQuery({
    page,
    limit,
    sortBy,
    order,
    traveledWith
  });

  const response = await apiClient.get(
    `/v1/reviews?${queryParams}`);

  return response.data;
};

export default {
  getReviewStats,
  getReviewComments,
}
