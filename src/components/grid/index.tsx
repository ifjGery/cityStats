import React from 'react';

import style from './grid.less';

export declare interface GridProps {
  itemList: Array<{
    node: React.ReactNode,
    key: string | number}
  >
}

const Grid = ({ itemList }: GridProps) => (
  <div className={style.grid}>
    {itemList.map((item) => <div key={item.key}>{item.node}</div>)}
  </div>
);

export default Grid;
