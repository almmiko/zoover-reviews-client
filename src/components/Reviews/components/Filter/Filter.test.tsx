import { mount, shallow } from 'enzyme';
import Filter from './Filter';
import React from 'react';
import { Select } from 'antd';

it('renders correctly', () => {
  const onFilter = jest.fn();
  const tree = shallow(<Filter onFilter={onFilter} />);
  expect(tree).toMatchSnapshot();
});

it('onFilter callback called with value', () => {
  const onFilter = jest.fn();
  const tree = mount(<Filter onFilter={onFilter} />);

  // @ts-ignore
  tree.find(Select).props().onChange('test');

  expect(onFilter).toHaveBeenLastCalledWith('test');
  expect(onFilter).toBeCalled();
});
