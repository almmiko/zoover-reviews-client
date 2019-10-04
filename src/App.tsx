import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import ReviewsList from './components/Reviews/ReviewsList';
import { Wrapper } from './components/_common/Layout/elements';
import Overview from './components/Overview/Overview';

@inject('ss')
@observer
class App extends Component<any & any> {

  render() {
    return (
        <Wrapper>
            <Overview />
            <ReviewsList />
        </Wrapper>
    );
  }

}

export default App;
