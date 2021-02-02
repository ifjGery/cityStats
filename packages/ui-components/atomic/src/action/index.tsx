import React from 'react';
import Icon, { IconType } from '../icon';

import style from './style.less';

export declare interface ActionProps {
  content: React.ReactNode | string,
  contentAlign: 'side' | 'center'
  iconOnLeft: boolean,
  iconAlign: 'side' | 'center'
  icon?: IconType,
}

const Action : React.FunctionComponent<ActionProps> = ({
  content, contentAlign, iconOnLeft, icon,
}) => (
  <span className={style.action}>
    {icon && iconOnLeft && <Icon type={icon} />}
    <span className={style[contentAlign]}>
      {content}
    </span>
    {icon && !iconOnLeft && <Icon type={icon} />}
  </span>
);

Action.defaultProps = {
  contentAlign: 'center',
  iconOnLeft: false,
  iconAlign: 'center',
};

export default Action;
