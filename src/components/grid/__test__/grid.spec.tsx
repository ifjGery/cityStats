import React from 'react';
import renderer from 'react-test-renderer';
import Grid from 'Component/grid';

describe('Grid component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Grid itemList={[
        {
          key: 1,
          node: <span>test</span>,
        },
        {
          key: 2,
          node: <span>test</span>,
        },
        {
          key: 3,
          node: <span>test</span>,
        },
        {
          key: 4,
          node: <span>test</span>,
        },
      ]}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
