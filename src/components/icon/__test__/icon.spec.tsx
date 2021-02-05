import React from 'react';
import renderer from 'react-test-renderer';
import Icon, { IconType } from 'Component/icon';

describe('Icon component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Icon type={IconType.menu} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
