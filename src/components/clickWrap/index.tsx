/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import style from './clickWrap.less';

export declare interface ClickWrapProps {
  children: React.ReactNode,
  onClick: Function | undefined
}

const ClickWrap = ({ children, onClick }: ClickWrapProps) => {
  const callback = () => {
    if (onClick) {
      onClick();
    }
  };

  if (onClick !== undefined) {
    return <span className={style['click-wrap']} onClick={callback}>{children}</span>;
  }
  return <>{children}</>;
};

export default ClickWrap;
