import { shallow } from 'enzyme';
import Comment from './Comment';
import React from 'react';
import { Resource } from '../../../../typings/reviewsComments';

const commentStub = {
  id: 'test',
  parents: [],
  traveledWith: 'test',
  entryDate: 1,
  travelDate: 1,
  user: 'test',
  locale: 'locale',
  texts: {
    locale: 'test'
  },
  titles: { locale: 'test' },
  ratings: { general: 12, aspects: [] } as any
};

it('renders correctly', () => {
  const tree = shallow(<Comment comment={commentStub as Resource} />);
  expect(tree).toMatchSnapshot();
});
