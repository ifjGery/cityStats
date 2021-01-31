import React from 'react';
import renderer from 'react-test-renderer';
import Atomic from '../src/Atomic';

it('renders correctly', () => {
  const tree = renderer
    .create(<Atomic />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
