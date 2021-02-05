import React from 'react';
import Css from 'Helper/classHelper';

import style from './rotateWrap.less';

export declare interface BannerProps {
  children: React.ReactNode,
  rotated: boolean
}

const Banner = ({ children, rotated }: BannerProps) => (
  <span className={style['rotate-wrap']}>
    <span className={Css([
      style.base,
      rotated && style.rot180,
    ])}
    >
      {children}
    </span>
  </span>
);

Banner.defaultProps = {
  rotated: false,
};

export default Banner;
