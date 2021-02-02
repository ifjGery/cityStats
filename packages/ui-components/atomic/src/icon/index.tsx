import React from 'react';

import style from './style.less';

export type IconType = 'image' | 'pin' | 'save' | 'search' | 'info' | 'cancel' | 'up' | 'down';

export declare interface IconProps {
  type: IconType
}

const Icon = ({ type }: IconProps) => (
  <span className={style[type]} />
);

export default Icon;
