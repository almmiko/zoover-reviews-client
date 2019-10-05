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

type Props = {
  apiError: boolean,
}

type State = {
  apiCallError: boolean,
}

@inject('reviewsStore')
@observer
class Reviews extends React.Component<Props, State> {

  state = {
    apiCallError: false,
  };

  get injected(): InjectedProps {
    return this.props as Props & InjectedProps;
  }

  handleSort = (sortBy: string, order: string) => {
    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    filterAndSortReviewComments({ sortBy, order })
      .catch(() => {
        this.setState({ apiCallError: true })
      });
  };

  handleFilter = (traveledWith: string) => {
    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    filterAndSortReviewComments({ traveledWith })
      .catch(() => {
        this.setState({ apiCallError: true })
      });
  };

  handlePageChange = (page: number) => {
    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    window.scrollTo(0, 0);
    filterAndSortReviewComments({ page })
      .catch(() => {
        this.setState({ apiCallError: true })
      });
  };

  render() {
    const { reviewsStore } = this.injected;
    const { getReviewComments, commentsLoaded, currentPaginationPage } = reviewsStore;

    return(
      <Wrapper>
        <Actions>
          <Filter onFilter={this.handleFilter} />
          <SortControls onSort={this.handleSort} />
        </Actions>
        <Comments
          error={this.props.apiError || this.state.apiCallError}
          currentPage={currentPaginationPage}
          onPageChanged={this.handlePageChange}
          comments={getReviewComments}
          loaded={commentsLoaded}
        />
      </Wrapper>
    );
  }
}

export default Reviews;
