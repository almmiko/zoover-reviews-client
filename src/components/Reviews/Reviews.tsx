import React from 'react';
import { Wrapper, Actions, SearchWrapper } from './elements';
import Filter from './components/Filter/Filter';
import Comments from './components/Comments/Comments';
import ReviewsStore from '../../stores/reviewsStore';
import { inject, observer } from 'mobx-react';
import SortControls from './components/SortControls/SortControls';
import SearchInput from '../_common/SearchInput/SearchInput';

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

  onSearch = (value: string) => {
    if (!value.trim()) return;

    const { reviewsStore: { filterAndSortReviewComments }} = this.injected;
    filterAndSortReviewComments({ searchQuery: value })
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
        <SearchWrapper>
          <SearchInput
            placeholder={'Search by title'}
            onSearch={this.onSearch} />
        </SearchWrapper>
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
