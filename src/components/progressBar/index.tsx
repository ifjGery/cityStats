import React, { useEffect, useState } from 'react';
import Css from 'Helper/classHelper';

import style from './progressBar.less';

export declare interface BannerProps {
  children: React.ReactNode,
  progress: number,
  hasTransition: boolean
}

const progressBar = ({ children, progress, hasTransition }: BannerProps) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (progress <= 1 && progress >= 0) {
      setPercent(progress * 100);
    } else if (progress > 1) {
      setPercent(100);
    } else {
      setPercent(0);
    }
  }, [progress]);
  return (
    <>
      <div
        className={Css([
          style['progress-bar'],
          hasTransition && style.transition,
        ])}
        style={{ width: `${percent}%` }}
      />
      {children}
    </>
  );
};

progressBar.defaultProps = {
  withBorder: false,
  hasTransition: false,
};

export default progressBar;
