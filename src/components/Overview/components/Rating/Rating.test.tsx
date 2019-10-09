import { shallow } from 'enzyme';
import Rating from './Rating';
import React from 'react';

it('renders correctly', () => {
  const tree = shallow(<Rating loaded={true} apiError={false} rating={12} />);
  expect(tree).toMatchSnapshot();
});
