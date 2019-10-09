import { shallow } from 'enzyme';
import Comments from './Comments';
import React from 'react';

it('renders correctly', () => {
  const tree = shallow(<Comments
    currentPage={1}
    loaded={true}
    error={false}
    comments={{
      resources: [],
      meta: {} as any,
    }}
    onPageChanged={jest.fn()}
  />);
  expect(tree).toMatchSnapshot();
});
