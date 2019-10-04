import React, { Fragment } from 'react';
import { Title, Value, Wrapper } from './elements';

class Rating extends React.Component<any> {
    render() {
        return (
            <Wrapper>
                <Title>Rating</Title>
                <Value>12</Value>
            </Wrapper>
        );
    }
}

export default Rating;
