import React from 'react';
import Css from 'Helper/classHelper';

import style from './banner.less';

export declare interface BannerProps {
  children: React.ReactNode,
  withBorder: boolean
}

const Banner = ({ children, withBorder }: BannerProps) => (
  <div className={Css([
    style.banner,
    withBorder && style.border,
  ])}
  >
    {children}
  </div>
);

Banner.defaultProps = {
  withBorder: false,
};

export default Banner;
