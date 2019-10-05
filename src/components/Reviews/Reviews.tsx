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
    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    filterAndSortReviewComments({ sortBy, order }); //todo handle error
  };

  handleFilter = (traveledWith: string) => {
    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    filterAndSortReviewComments({ traveledWith }); //todo handle error
  };

  handlePageChange = (page: number) => {
    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    window.scrollTo(0, 0);
    filterAndSortReviewComments({ page }); //todo handle error
  };

  render() {
    const { reviewsStore } = this.injected;
    const { getReviewComments, commentsLoaded } = reviewsStore;

    return(
      <Wrapper>
        <Actions>
          <Filter onFilter={this.handleFilter} />
          <SortControls onSort={this.handleSort} />
        </Actions>
        <Comments
          onPageChanged={this.handlePageChange}
          comments={getReviewComments}
          loaded={commentsLoaded}
        />
      </Wrapper>
    );
  }
}

export default Reviews;
