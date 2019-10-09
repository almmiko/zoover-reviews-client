import { shallow } from 'enzyme';
import StatsSection from './StatsSection';
import React from 'react';

it('renders correctly', () => {
  const tree = shallow(<StatsSection
    apiError={false}
    loaded={true}
    stats={{ test: 'test' }}
    title={'test'} />);
  expect(tree).toMatchSnapshot();
});
