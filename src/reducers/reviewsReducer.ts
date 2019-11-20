import { Query } from '../services/reviewsService';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments, Meta } from '../typings/reviewsComments';
import { createReducer } from '@reduxjs/toolkit';
import {
  receiveReviewStats,
  fetchReviewStatsError,
  receiveReviewComments,
  fetchReviewCommentsError,
  receiveFilterAndSortReviewComments,
  filterAndSortReviewCommentsError,
  requestFilterAndSortReviewComments
} from '../actions/reviewsActions';

export const STATS_MAPPING = {
  location: 'Location',
  service: 'Service',
  priceQuality: 'Price Quality',
  food: 'Food',
  room: 'Room',
  childFriendly: 'Child Friendly',
  interior: 'Interior',
  size: 'Size',
  activities: 'Activities',
  restaurants: 'Restaurants',
  sanitaryState: 'Sanitary State',
  accessibility: 'Accessibility',
  nightlife: 'Nightlife',
  culture: 'Culture',
  surrounding: 'Surrounding',
  atmosphere: 'Atmosphere',
  noviceSkiArea: 'Novice Ski Area',
  advancedSkiArea: 'Advanced Ski Area',
  apresSki: 'ApresSki',
  beach: 'Beach',
  entertainment: 'Entertainment',
  environmental: 'Environmental',
  pool: 'Pool',
  terrace: 'Terrace',
};

export type initialStateType = {
  reviewStats: ReviewStats | null,
  reviewComments: ReviewsComments,
  reviewCurrentQueryParams: Query | null;
  statsLoaded: boolean,
  statsLoadError: boolean,
  commentsLoaded: boolean,
  commentsLoadError: boolean,
  currentPaginationPage: number,
}

const initialState: initialStateType = {
  reviewStats: null,
  reviewComments: {
    resources: [],
    meta: {} as Meta,
  },
  reviewCurrentQueryParams: null,
  statsLoaded: false,
  statsLoadError: false,
  commentsLoaded: false,
  commentsLoadError: false,
  currentPaginationPage: 1
};

export default createReducer(initialState, {
  [receiveReviewStats.type]: (state, action) => {
    const { payload } = action;
    state.reviewStats = payload;
    state.statsLoaded = true;
    return state;
  },
  [fetchReviewStatsError.type]: (state) => {
    state.statsLoadError = true;
    return state;
  },
  [receiveReviewComments.type]: (state, action) => {
    const { payload } = action;
    state.reviewComments = payload;
    state.commentsLoaded = true;
    return state;
  },
  [fetchReviewCommentsError.type]: (state) => {
    state.commentsLoadError = true;
    state.commentsLoaded = true;
    return state;
  },
  [requestFilterAndSortReviewComments.type]: (state) => {
    state.commentsLoaded = false;
    return state;
  },
  [receiveFilterAndSortReviewComments.type]: (state, action) => {
    const { payload: { reviewComments, paginationPage, queryParams } } = action;

    state.reviewComments = reviewComments;
    state.currentPaginationPage = paginationPage;
    state.reviewCurrentQueryParams = queryParams;
    state.commentsLoaded = true;
    return state;
  },
  [filterAndSortReviewCommentsError.type]: (state) => {
    state.commentsLoadError = true;
    state.commentsLoaded = true;
    return state;
  }
});
