import React from 'react';
import { Wrapper, Actions } from './elements';
import Filter from './components/Filter/Filter';
import Comments from './components/Comments/Comments';
import ReviewsStore from '../../stores/reviewsStore';
import { inject, observer } from 'mobx-react';

type InjectedProps = {
  reviewsStore: ReviewsStore;
}

type Props = {}

@inject('reviewsStore')
@observer
class Reviews extends React.Component<any> {

  get injected(): InjectedProps {
    return this.props as Props & InjectedProps;
  }

  render() {
    const { reviewsStore } = this.injected;
    const { getReviewComments, commentsLoaded } = reviewsStore;

    return(
      <Wrapper>
        <Actions>
          <Filter />
          <Filter />
        </Actions>
        <Comments comments={getReviewComments} loaded={commentsLoaded} />
      </Wrapper>
    );
  }
}

export default Reviews;
