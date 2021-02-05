import React, { useState } from 'react';
import Css from 'Helper/classHelper';

import style from './list.less';

export declare interface ListType {
  itemList: Array<React.ReactNode | string>,
  direction: 'horizontal' | 'vertical'
}

const List = ({ itemList, direction }: ListType) => (
  <div className={Css([
    style.list,
    direction === 'horizontal' && style.horizontal,
  ])}
  >
    <ul>
      {itemList.map((item) => <li>{item}</li>)}
    </ul>
  </div>
);

List.defaultProps = {
  itemList: [],
  direction: 'horizontal',
};

export default List;
