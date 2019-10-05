import { observable, computed, action, runInAction } from "mobx";
import reviewsService from '../services/reviewsService';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments } from '../typings/reviewsComments';

class ReviewsStore {

  @observable
  reviewStats: ReviewStats | undefined;

  @observable
  reviewComments: ReviewsComments | undefined;

  @observable
  statsLoaded: boolean = false;

  @computed
  get getReviewComments() {
    return this.reviewComments;
  }

  @computed
  get getReviewStats() {
    return this.reviewStats;
  }

  constructor() {
    setTimeout(() => {
      console.log(this.reviewComments);
      console.log(this.reviewStats);
    }, 3000)
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
      const reviewComments = await reviewsService.getReviewComments(page, limit);

      runInAction(() => {
        this.reviewComments = reviewComments;
      });

    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default ReviewsStore;
