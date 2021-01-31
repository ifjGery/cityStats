---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/__test__/<%= h.changeCase.camelCase(name) %>.spec.tsx
---
import React from 'react';
import renderer from 'react-test-renderer';
import <%= h.changeCase.pascalCase(name) %> from '../src/<%= h.changeCase.pascalCase(name) %>';

it('renders correctly', () => {
  const tree = renderer
    .create(<<%= h.changeCase.pascalCase(name) %> />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
