import React from 'react';

export declare interface ActionProps {
    content: React.ReactNode | string;
    contentAlign: 'side' | 'center';
    iconOnLeft: boolean;
    iconAlign: 'side' | 'center';
    icon?: IconType;
}
declare const Action: React.FunctionComponent<ActionProps>;

export declare type IconType = 'image' | 'pin' | 'save' | 'search' | 'info' | 'cancel' | 'up' | 'down';
export declare interface IconProps {
    type: IconType;
}
declare const Icon: ({ type }: IconProps) => JSX.Element;
export default Icon;

export {
  Action,
  Icon,
};
