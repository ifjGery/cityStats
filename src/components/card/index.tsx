import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Image from 'Component/image';
import ProgressBar from 'Component/progressBar';
import AnyClick from 'Component/anyClick';
import Action from 'Component/action';
import Icon, { IconType } from 'Component/icon';
import Css from 'Helper/classHelper';

import style from './card.less';

export declare interface CardProps {
  image: string,
  name: string,
  cityId: string
  withMenu: boolean
}

const Card = ({
  image, name, cityId, withMenu,
}: CardProps) => {
  const timeout = 0.3 * 1000; // 1 sec
  const clicked = useRef(false);
  const startTimestamp = useRef(0);
  let p = 0;
  const [progress, setProgress] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const timerStop = () => {
    startTimestamp.current = Date.now() + 1000;
    clicked.current = false;
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navigateToCity = () => {
    history.push(`/city/${cityId}`);
  };

  const updateProgress = () => {
    p = (Date.now() - startTimestamp.current) / timeout;
    if (p >= 1.5) {
      timerStop();
      setShowMenu(true);
      setProgress(0);
    } else {
      setProgress(p);

      if (clicked.current) {
        window.requestAnimationFrame(updateProgress);
      }
    }
  };

  const timerStart = () => {
    if (showMenu || !withMenu) return;
    startTimestamp.current = Date.now();
    clicked.current = true;
    window.requestAnimationFrame(updateProgress);
  };

  const inside = (
    <>
      {withMenu && showMenu && (
      <AnyClick callback={closeMenu}>
        <div className={style.tooltip}>
          <Action
            content={<Icon type={IconType.info} />}
            contentCallback={() => navigateToCity()}
          />
        </div>
      </AnyClick>
      )}
      <ProgressBar progress={progress}>
        <div className={style.image}>
          <Image src={image} alt={name} dir="vertical" />
        </div>
        <div className={style.text}>
          {name}
        </div>
      </ProgressBar>
    </>
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={Css([
        style.card,
      ])}
      onMouseDown={timerStart}
      onMouseUp={timerStop}
    >
      {withMenu ? { inside }
        : <Action content={inside} contentCallback={() => navigateToCity()} />}

    </div>
  );
};

Card.defaultProps = {
  withMenu: false,
};

export default Card;
