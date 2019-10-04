import React from 'react';
import { Title, Value, Wrapper, IconBox } from './elements';
import { Icon } from 'antd';

class Rating extends React.Component<any> {
  render() {
    return (
      <Wrapper>
        <IconBox>
          <Icon type="star" />
        </IconBox>
        <Title>Average Rating</Title>
        <Value>4.45</Value>
      </Wrapper>
    );
  }
}

export default Rating;
