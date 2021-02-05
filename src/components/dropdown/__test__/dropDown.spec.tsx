import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from 'Component/dropdown';

describe('Dropdown component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Dropdown dropdownContent="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
