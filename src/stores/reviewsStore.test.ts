import ReviewsStore from './reviewsStore';
import reviewsService from '../services/reviewsService';

const reviewsStore = new ReviewsStore();

const reviewStatsMock = {
  averageRating: 1,
  averageRatingAspects: [],
  traveledWith: {},
};

const reviewCommentsMock = {
  resources: [],
  meta: {}
};

it('fetch review stats', async () => {
  reviewsService.getReviewStats = jest.fn().mockResolvedValue(reviewStatsMock);
  await reviewsStore.fetchReviewStats();

  expect(reviewsService.getReviewStats).toBeCalled();
  expect(reviewsStore.statsLoaded).toBeTruthy();
  expect(reviewsStore.reviewStats).toEqual(reviewStatsMock);
});

it('fetch review comments', async () => {
  reviewsService.getReviewComments = jest.fn().mockResolvedValue(reviewCommentsMock);
  await reviewsStore.fetchReviewComments();

  expect(reviewsService.getReviewComments).toBeCalled();
  expect(reviewsStore.commentsLoaded).toBeTruthy();
  expect(reviewsStore.reviewComments).toEqual(reviewCommentsMock);
});

it('filter and sort comments', async () => {
  reviewsService.getReviewComments = jest.fn().mockResolvedValue(reviewCommentsMock);

  await reviewsStore.filterAndSortReviewComments({ sortBy: 'test', order: 'test'});

  expect(reviewsService.getReviewComments).toBeCalledWith({ page: 1, sortBy: 'test', order: 'test'});
  expect(reviewsStore.commentsLoaded).toBeTruthy();
  expect(reviewsStore.reviewComments).toEqual(reviewCommentsMock);

  await reviewsStore.filterAndSortReviewComments({ traveledWith: 'test', page: 2 });
  expect(reviewsService.getReviewComments).toBeCalledWith({ traveledWith: 'test', page: 2, sortBy: 'test', order: 'test'});
});
