import React from 'react';
import { Wrapper, Actions } from './elements';
import Filter from './components/Filter/Filter';
import Comments from './components/Comments/Comments';
import ReviewsStore from '../../stores/reviewsStore';
import { inject, observer } from 'mobx-react';
import SortControls from './components/SortControls/SortControls';

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

  handleSort = (sortBy: string, order: string) => {
    console.log(sortBy);
    console.log(order);
  };

  render() {
    const { reviewsStore } = this.injected;
    const { getReviewComments, commentsLoaded } = reviewsStore;

    return(
      <Wrapper>
        <Actions>
          <Filter />
          <SortControls onSort={this.handleSort} />
        </Actions>
        <Comments comments={getReviewComments} loaded={commentsLoaded} />
      </Wrapper>
    );
  }
}

export default Reviews;
