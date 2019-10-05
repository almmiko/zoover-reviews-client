import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import Reviews from './components/Reviews/Reviews';
import { Wrapper } from './components/_common/Layout/elements';
import Overview from './components/Overview/Overview';

@inject('ss')
@observer
class App extends Component<any & any> {

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
