import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../store';
import { MemoryRouter } from 'react-router-dom';

import App from './';

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

it('renders without crashing', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Wrapper />
    </MemoryRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
