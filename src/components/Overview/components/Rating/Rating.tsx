import React from 'react';
import { Title, Value, Wrapper, IconBox } from './elements';
import { Icon } from 'antd';

type Props = {
  rating: number | undefined,
  loaded: boolean,
  apiError: boolean
}

class Rating extends React.Component<Props> {
  render() {
    const { loaded, rating, apiError } = this.props;
    return (
      <Wrapper>
        <IconBox>
          <Icon type="star" />
        </IconBox>
        <Title>Average Rating</Title>
        <Value error={apiError}>{apiError ? 'Error while fetching data' : (loaded ? rating : 'Loading...')}</Value>
      </Wrapper>
    );
  }
}

export default Rating;
