import React from 'react';
import SortControls from './SortControls';
import { mount, shallow } from 'enzyme';
import { Button } from 'antd';

it('renders correctly', () => {
  const onSort = jest.fn();
  const tree = shallow(<SortControls onSort={onSort} />);
  expect(tree).toMatchSnapshot();
});

it('should toggle state on onSort callback', () => {
  const onSort = jest.fn();
  const tree = mount(<SortControls onSort={onSort} />);

  tree.find(Button).children().first().simulate('click');
  tree.find(Button).children().first().simulate('click');

  expect(onSort).toBeCalledWith('travelDate', 'asc');
  expect(onSort).toHaveBeenLastCalledWith('travelDate', 'desc');
  expect(onSort).toBeCalledTimes(2);
});
