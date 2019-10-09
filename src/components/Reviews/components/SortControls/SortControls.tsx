import React from 'react';
import { Button, Icon } from 'antd';
import { Wrapper, Title } from './elements';

type State = {
  travelDateOrder: string,
  reviewDateOrder: string,
};

enum Order {
  ascending = 'asc',
  descending = 'desc',
}

type Props = {
  loading?: boolean,
  onSort: (sortBy: string, order: string) => void,
};

class SortControls extends React.Component<Props, State> {

  state = {
    travelDateOrder: Order.descending,
    reviewDateOrder: Order.descending
  };

  getIcon = (sortType: string) => {
    const order = this.state[sortType];

    switch (order) {
      case Order.ascending:
        return 'caret-down';
      case Order.descending:
        return 'caret-up';
      default:
        return 'caret-up'
    }
  };

  handleTravelDateOrder = () => {
    const { travelDateOrder } = this.state;

    this.setState({
      travelDateOrder: travelDateOrder === Order.ascending ? Order.descending : Order.ascending,
    }, () => {
      this.props.onSort('travelDate', this.state.travelDateOrder);
    });

  };
  // let's keep this fn and handleTravelDateOrder for better logic splitting.
  handleReviewDateOrder = () => {
    const { reviewDateOrder } = this.state;

    this.setState({
      reviewDateOrder: reviewDateOrder === Order.ascending ? Order.descending : Order.ascending,
    }, () => {
      this.props.onSort('entryDate', this.state.reviewDateOrder);
    });

  };

  render() {
    return (
      <Wrapper>
        <Title>
          Sort by:
        </Title>
        <Button id={'travelDateOrderButton'} type="default" onClick={this.handleTravelDateOrder}>
          Travel Date
          <Icon type={(() => this.getIcon('travelDateOrder'))()} />
        </Button>
        <Button type="default" onClick={this.handleReviewDateOrder}>
          Review Date
          <Icon type={(() => this.getIcon('reviewDateOrder'))()} />
        </Button>
      </Wrapper>
    );
  }
}

export default SortControls;
