import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { reviewStoreStub } from './testUtils';

it('renders correctly', () => {
  // @ts-ignore
  const tree = shallow(<App.wrappedComponent reviewsStore={reviewStoreStub} />);

  expect(tree).toMatchSnapshot();
});
