import React from 'react';
import Icon, { IconType } from 'Component/icon';
import ClickWrap from 'Component/clickWrap';
import Css from 'Helper/classHelper';

import style from './action.less';

export declare interface ActionProps {
  content: React.ReactNode | string,
  contentCallback?: Function,
  contentAlign: 'side' | 'center',
  iconOnLeft: boolean,
  iconAlign: 'side' | 'center'
  icon?: IconType,
  iconCallback?: Function,
}

const Action = ({
  content,
  contentCallback,
  iconOnLeft,
  icon,
  iconCallback,
  iconAlign,
}: ActionProps) => {
  const localContent = <ClickWrap onClick={contentCallback}>{content}</ClickWrap>;
  const iconElem = icon && (
  <span
    className={Css([
      iconAlign === 'side' && (iconOnLeft ? style['floating-icon-left'] : style['floating-icon-right']),
    ])}
  >
    <ClickWrap onClick={iconCallback}>
      <Icon type={icon} />
    </ClickWrap>
  </span>
  );

  const ordered = iconOnLeft
    ? (
      <>
        {iconElem}
        {localContent}
      </>
    )
    : (
      <>
        {localContent}
        {iconElem}
      </>
    );

  return (
    <span className={Css([style.action])}>
      {ordered}
    </span>
  );
};

Action.defaultProps = {
  contentAlign: 'center',
  iconOnLeft: false,
  iconAlign: 'center',
};

export default Action;
