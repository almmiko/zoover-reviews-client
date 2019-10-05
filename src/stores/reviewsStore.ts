import { observable, computed, action, runInAction } from "mobx";
import reviewsService from '../services/reviewsService';
import { ReviewStats } from '../typings/reviewStats';
import { ReviewsComments, Meta } from '../typings/reviewsComments';

class ReviewsStore {

  @observable
  reviewStats: ReviewStats | undefined;

  @observable
  reviewComments: ReviewsComments = {
    resources: [],
    meta: {} as Meta,
  };

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
      const reviewComments = await reviewsService.getReviewComments(page, limit);

      runInAction(() => {
        this.reviewComments = reviewComments;
        this.commentsLoaded = true;
      });

    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default ReviewsStore;
