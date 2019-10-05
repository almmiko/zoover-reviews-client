import { observable, computed, action, runInAction } from "mobx";
import reviewsService, { Query } from '../services/reviewsService';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments, Meta } from '../typings/reviewsComments';

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

class ReviewsStore {

  @observable
  reviewStats: ReviewStats | undefined;

  @observable
  reviewComments: ReviewsComments = {
    resources: [],
    meta: {} as Meta,
  };

  @observable
  reviewCurrentQueryParams: Query | undefined;

  @observable
  statsLoaded: boolean = false;

  @observable
  commentsLoaded: boolean = false;

  @computed
  get getReviewComments() {
    return this.reviewComments;
  }

  @computed
  get getReviewStats() {
    return this.reviewStats;
  }

  @action
  fetchReviewStats = async () => {
    try {
       const reviewStats = await reviewsService.getReviewStats();

       runInAction(() => {
         this.reviewStats = reviewStats;
         this.statsLoaded = true;
       });

    } catch (e) {
      return Promise.reject(e);
    }
  };

  @action
  fetchReviewComments = async (page = 1, limit = 20) => {
    try {
      const reviewComments = await reviewsService.getReviewComments({ page, limit });

      runInAction(() => {
        this.reviewComments = reviewComments;
        this.commentsLoaded = true;
      });

    } catch (e) {
      return Promise.reject(e);
    }
  };

  @action
  filterAndSortReviewComments = async (config: {page?: number, sortBy?: string, order?: string, traveledWith?: string}) => {
    try {
      this.reviewCurrentQueryParams = {...this.reviewCurrentQueryParams, ...config};
      this.commentsLoaded = false;

      const reviewComments = await reviewsService.getReviewComments(this.reviewCurrentQueryParams);

      runInAction(() => {
        this.reviewComments = reviewComments;
        this.commentsLoaded = true;
      });
    } catch (e) {
      this.commentsLoaded = true;
      return Promise.reject(e)
    }
  };

}

export default ReviewsStore;
