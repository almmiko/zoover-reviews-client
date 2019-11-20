import React from 'react';
import StatsSection from './components/StatsSection/StatsSection';
import Rating from './components/Rating/Rating';
import { Wrapper, RatingContainer, StatsSectionContainer, TraveledWithContainer } from './elements';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { initialStateType } from '../../reducers/reviewsReducer';
import { ReviewStats } from '../../typings/reviewStats';

type StateProps = {
  reviewStats: ReviewStats | null,
  statsLoaded: boolean
  statsLoadError: boolean,
}

class Overview extends React.Component<StateProps> {

  render() {
    const { statsLoaded, reviewStats, statsLoadError } = this.props;

    const rating = get(reviewStats, 'averageRating');
    const ratingAspects = get(reviewStats, 'averageRatingAspects');
    const traveledWith = get(reviewStats, 'traveledWith');

    return (
      <Wrapper>
        <RatingContainer>
          <Rating
            apiError={statsLoadError}
            loaded={statsLoaded}
            rating={rating} />
        </RatingContainer>
        <StatsSectionContainer>
          <StatsSection
            apiError={statsLoadError}
            title={'Rating aspects'}
            stats={ratingAspects}
            loaded={statsLoaded} />
        </StatsSectionContainer>
        <TraveledWithContainer>
          <StatsSection
            apiError={statsLoadError}
            title={'Traveled with'}
            stats={traveledWith}
            loaded={statsLoaded} />
        </TraveledWithContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: { reviews: initialStateType}): StateProps => {
  const { reviews } = state;
  return {
    reviewStats: reviews.reviewStats,
    statsLoaded: reviews.statsLoaded,
    statsLoadError: reviews.statsLoadError,
  }
};

export default connect(mapStateToProps)(Overview);
