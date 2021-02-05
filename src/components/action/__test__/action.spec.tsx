import React from 'react';
import renderer from 'react-test-renderer';
import Action from 'Component/action';

describe('Action component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Action content="empty" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
