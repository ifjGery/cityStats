import React from 'react';
import renderer from 'react-test-renderer';
import InfoTable from '../src/InfoTable';

it('renders correctly', () => {
  const tree = renderer
    .create(<InfoTable />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
