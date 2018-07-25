import React from 'react';
import renderer from 'react-test-renderer';

import About from './';

it('renders without crashing', () => {
  const component = renderer.create(<About />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
