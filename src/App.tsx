import React, { Component } from 'react';
import Reviews from './components/Reviews/Reviews';
import { Wrapper } from './components/_common/Layout/elements';
import Overview from './components/Overview/Overview';
import { fetchReviewComments, fetchReviewStats } from './actions/reviewsActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

type Props = DispatchFromProps

class App extends Component<Props> {

  componentDidMount() {
    const { fetchReviewStats, fetchReviewComments } = this.props;

    fetchReviewStats();
    fetchReviewComments();
  }

  render() {
    return (
        <Wrapper>
            <Overview />
            <Reviews />
        </Wrapper>
    );
  }

}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
  return {
    fetchReviewStats: () => dispatch<any>(fetchReviewStats()),
    fetchReviewComments: () => dispatch<any>(fetchReviewComments())
  }
};

type DispatchFromProps = {
  fetchReviewStats: () => void,
  fetchReviewComments: () => void,
}

export default connect<{}, DispatchFromProps>(null, mapDispatchToProps)(App);
