import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import reviewsService, { Query } from '../services/reviewsService';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments } from '../typings/reviewsComments';
import { initialStateType } from '../reducers/reviewsReducer';

export const requestReviewStats = createAction('REVIEWS/REQUEST_STATS');
export const receiveReviewStats = createAction<ReviewStats>('REVIEWS/REQUEST_STATS_SUCCESS');
export const fetchReviewStatsError = createAction('REVIEWS/REQUEST_STATS_ERROR');

export function fetchReviewStats() {
  return async (dispatch: Dispatch) => {
    dispatch(requestReviewStats());

    try {
      const reviewStats = await reviewsService.getReviewStats();
      dispatch(receiveReviewStats(reviewStats))
    } catch (e) {
      dispatch(fetchReviewStatsError(e))
    }

  }
}

export const requestReviewComments = createAction('REVIEWS/REQUEST_COMMENTS');
export const receiveReviewComments = createAction<ReviewsComments>('REVIEWS/REQUEST_COMMENTS_SUCCESS');
export const fetchReviewCommentsError = createAction('REVIEWS/REQUEST_COMMENTS_ERROR');

export function fetchReviewComments(page = 1, limit = 20): any {
  return async (dispatch: Dispatch) => {
    dispatch(requestReviewComments());

    try {
      const reviewComments = await reviewsService.getReviewComments({ page, limit });
      dispatch(receiveReviewComments(reviewComments))
    } catch (e) {
      dispatch(fetchReviewCommentsError(e))
    }

  }
}

export const requestFilterAndSortReviewComments = createAction('REVIEWS/REQUEST_FILTER_AND_SORT');
export const receiveFilterAndSortReviewComments = createAction<{
  reviewComments: ReviewsComments,
  paginationPage: number,
  queryParams: Query,
}>('REVIEWS/REQUEST_FILTER_AND_SORT_SUCCESS');
export const filterAndSortReviewCommentsError = createAction('REVIEWS/REQUEST_FILTER_AND_SORT_ERROR');

export function filterAndSortReviewComments(config: {
  page?: number,
  sortBy?: string,
  order?: string,
  traveledWith?: string,
  searchQuery?: string,
}) {
  return async (dispatch: Dispatch, getState: () => initialStateType) => {
    dispatch(requestFilterAndSortReviewComments());

    const { reviewCurrentQueryParams } = getState();

    const PAGINATION_INITIAL_PAGE = 1;

    try {
      const paginationPage = config.page || PAGINATION_INITIAL_PAGE;

      if (!config.page) { //reset pagination when sorting or filtering applied.
        config.page = PAGINATION_INITIAL_PAGE;
      }

      const queryParams = {...reviewCurrentQueryParams, ...config};

      const reviewComments = await reviewsService.getReviewComments(queryParams);

      dispatch(receiveFilterAndSortReviewComments({
        reviewComments,
        paginationPage,
        queryParams,
      }))

    } catch (e) {
      dispatch(filterAndSortReviewCommentsError(e))
    }

  }
}
