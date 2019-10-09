import { shallow } from 'enzyme';
import Overview from './Overview';
import React from 'react';
import { reviewStoreStub } from '../../testUtils';

it('renders correctly', () => {
  // @ts-ignore
  const tree = shallow(<Overview.wrappedComponent apiError={false} reviewsStore={reviewStoreStub} />);
  expect(tree).toMatchSnapshot();
});
