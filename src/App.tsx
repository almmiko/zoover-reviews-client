import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import Reviews from './components/Reviews/Reviews';
import { Wrapper } from './components/_common/Layout/elements';
import Overview from './components/Overview/Overview';
import ReviewsStore from './stores/reviewsStore';

type InjectedProps = {
  reviewsStore: ReviewsStore;
}

type Props = {};

type State = {
  fetchReviewCommentsError: boolean,
  fetchReviewStatsError: boolean
};

@inject('reviewsStore')
@observer
class App extends Component<Props, State> {

  state = {
    fetchReviewCommentsError: false,
    fetchReviewStatsError: false,
  };

  get injected(): InjectedProps {
    return this.props as Props & InjectedProps;
  }

  componentDidMount() {
    const { reviewsStore } = this.injected;

    reviewsStore.fetchReviewComments().catch(() => this.setState({fetchReviewCommentsError: true}));
    reviewsStore.fetchReviewStats().catch(() => this.setState({ fetchReviewStatsError: true}));
  }

  render() {
    const { fetchReviewCommentsError, fetchReviewStatsError } = this.state;

    return (
        <Wrapper>
            <Overview apiError={fetchReviewStatsError} />
            <Reviews apiError={fetchReviewCommentsError} />
        </Wrapper>
    );
  }

}

export default App;
