import React from 'react';
import renderer from 'react-test-renderer';
import List from 'Component/list';

describe('List component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<List itemList={[
        'test',
        'test',
        'test',
      ]}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
