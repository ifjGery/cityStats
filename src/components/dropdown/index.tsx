import React, { useState, useRef } from 'react';
import Icon, { IconType } from 'Component/icon';
import ClickWrap from 'Component/clickWrap';
import RotateWrap from 'Component/rotateWrap';
import AnyClick from 'Component/anyClick';

import style from './dropdown.less';

export declare interface DropdownProps {
  dropdownContent: React.ReactNode | string
}

const Dropdown = ({ dropdownContent }: DropdownProps) => {
  const [opened, setOpened] = useState(false);
  const controlRef = useRef(null);

  return (
    <div>
      <span ref={controlRef}>
        <ClickWrap onClick={() => setOpened(!opened)}>
          Text
          <RotateWrap rotated={opened}>
            <Icon type={IconType.down} />
          </RotateWrap>
        </ClickWrap>
      </span>
      {opened && (
      <div className={style.dropdown}>
        <AnyClick excludeRef={controlRef} callback={() => setOpened(false)}>
          {dropdownContent}
        </AnyClick>
      </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  dropdownContent: [],
};

export default Dropdown;
