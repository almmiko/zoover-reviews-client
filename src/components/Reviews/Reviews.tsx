import React from 'react';
import { Wrapper, Actions, SearchWrapper } from './elements';
import Filter from './components/Filter/Filter';
import Comments from './components/Comments/Comments';
import SortControls from './components/SortControls/SortControls';
import SearchInput from '../_common/SearchInput/SearchInput';
import { initialStateType } from '../../reducers/reviewsReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { filterAndSortReviewComments } from '../../actions/reviewsActions';
import { ReviewsComments } from '../../typings/reviewsComments';

type StateProps = {
  commentsLoadError: boolean,
  currentPaginationPage: number,
  commentsLoaded: boolean,
  reviewComments: ReviewsComments,
}

class Reviews extends React.Component<StateProps & DispatchFromProps> {

  handleSort = (sortBy: string, order: string) => {
    const { filterAndSortReviewComments } = this.props;
    filterAndSortReviewComments({ sortBy, order })
  };

  handleFilter = (traveledWith: string) => {
    const { filterAndSortReviewComments } = this.props;
    filterAndSortReviewComments({ traveledWith });
  };

  handlePageChange = (page: number) => {
    const { filterAndSortReviewComments } = this.props;
    window.scrollTo(0, 0);
    filterAndSortReviewComments({ page });
  };

  onSearch = (v: string) => {
    const value = v.trim();
    if (!value && value !== '') return;

    const { filterAndSortReviewComments } = this.props;
    filterAndSortReviewComments({ searchQuery: value })
  };

  render() {
    const { commentsLoadError, currentPaginationPage, commentsLoaded, reviewComments } = this.props;

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
          error={commentsLoadError}
          currentPage={currentPaginationPage}
          onPageChanged={this.handlePageChange}
          comments={reviewComments}
          loaded={commentsLoaded}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: { reviews: initialStateType}): StateProps => {
  const { reviews } = state;
  return {
    commentsLoadError: reviews.commentsLoadError,
    currentPaginationPage: reviews.currentPaginationPage,
    commentsLoaded: reviews.commentsLoaded,
    reviewComments: reviews.reviewComments,
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
  return {
    filterAndSortReviewComments: (config: any) => dispatch<any>(filterAndSortReviewComments(config)),
  }
};

type DispatchFromProps = {
  filterAndSortReviewComments: (config: any) => void,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
