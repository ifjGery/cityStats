import React from 'react';
import renderer from 'react-test-renderer';
import Card from 'Component/card';

describe('Card component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Card image="tes.png" name="test" cityId="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
