import React from 'react';
import renderer from 'react-test-renderer';
import Banner from 'Component/banner';

describe('Banner component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Banner>Content</Banner>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
