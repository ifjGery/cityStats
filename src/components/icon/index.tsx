/* eslint-disable no-unused-vars */
import React from 'react';
import Css from 'Helper/classHelper';

import style from './icon.less';

// eslint-disable-next-line no-shadow
export enum IconType {
  image = 'icon-image',
  pin = 'icon-pushpin',
  save = 'icon-floppy-disk',
  search = 'icon-search',
  info = 'icon-info',
  cancel = 'icon-cancel-circle',
  up = 'icon-circle-up',
  down = 'icon-circle-down',
  spinner = 'icon-spinner2',
  menu = 'icon-menu'
}

export declare interface IconProps {
  type: IconType
}

const Icon = ({ type }: IconProps) => (
  <span className={style.wrapper}><span className={Css([type, style[type]])} /></span>
);

export default Icon;
