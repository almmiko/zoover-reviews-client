import React from 'react';
import { Wrapper, Actions } from './elements';
import Filter from './components/Filter/Filter';
import Comments from './components/Comments/Comments';

class Reviews extends React.Component<any> {
    render() {
        return(
            <Wrapper>
              <Actions>
                <Filter />
                <Filter />
              </Actions>
              <Comments />
            </Wrapper>
        );
    }
}

export default Reviews;
