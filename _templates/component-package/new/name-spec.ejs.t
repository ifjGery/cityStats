---
to: packages/ui-components/<%= name %>/__test__/<%= name %>.spec.tsx
---
import React from 'react';
import renderer from 'react-test-renderer';
import <%= h.inflection.camelize(name) %> from '../src/<%= h.inflection.camelize(name) %>';

it('renders correctly', () => {
  const tree = renderer
    .create(<<%= h.inflection.camelize(name) %> />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
