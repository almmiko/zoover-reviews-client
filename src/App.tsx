import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import Reviews from './components/Reviews/Reviews';
import { Wrapper } from './components/_common/Layout/elements';
import Overview from './components/Overview/Overview';
import ReviewsStore from './stores/reviewsStore';

type InjectedProps = {
  reviewsStore: ReviewsStore;
}

type Props = {}

@inject('reviewsStore')
@observer
class App extends Component<Props> {

  get injected(): InjectedProps {
    return this.props as Props & InjectedProps;
  }

  componentDidMount() {
    const { reviewsStore } = this.injected;

    reviewsStore.fetchReviewComments();
    reviewsStore.fetchReviewStats();
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

export default App;
