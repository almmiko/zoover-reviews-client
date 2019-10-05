import React from 'react';
import StatsSection from './components/StatsSection/StatsSection';
import Rating from './components/Rating/Rating';
import { Wrapper, RatingContainer, StatsSectionContainer, TraveledWithContainer } from './elements';
import { inject, observer } from 'mobx-react';
import { get } from 'lodash';
import ReviewsStore from '../../stores/reviewsStore';

type InjectedProps = {
  reviewsStore: ReviewsStore;
}

type Props = {}

@inject('reviewsStore')
@observer
class Overview extends React.Component<Props> {

  get injected(): InjectedProps {
    return this.props as Props & InjectedProps;
  }

  render() {
    const { reviewsStore } = this.injected;
    const { statsLoaded, getReviewStats } = reviewsStore;

    const rating = get(getReviewStats, 'averageRating');
    const ratingAspects = get(getReviewStats, 'averageRatingAspects');
    const traveledWith = get(getReviewStats, 'traveledWith');

    return (
      <Wrapper>
        <RatingContainer>
          <Rating loaded={statsLoaded} rating={rating} />
        </RatingContainer>
        <StatsSectionContainer>
          <StatsSection
            title={'Rating aspects'}
            stats={ratingAspects}
            loaded={statsLoaded} />
        </StatsSectionContainer>
        <TraveledWithContainer>
          <StatsSection
            title={'Traveled with'}
            stats={traveledWith}
            loaded={statsLoaded} />
        </TraveledWithContainer>
      </Wrapper>
    );
  }
}

export default Overview;
