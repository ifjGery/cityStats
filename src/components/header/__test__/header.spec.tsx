import React from 'react';
import renderer from 'react-test-renderer';
import Header from 'Component/header';

describe('Header component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
