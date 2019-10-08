import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { Provider as MobxProvider } from 'mobx-react';
import stores from './stores';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MobxProvider {...stores}>
        <App />
      </MobxProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
