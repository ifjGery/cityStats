import React, { useContext } from 'react';
import i18n from 'Helper/i18nContext';

import Image from 'Component/image';

import style from './header.less';

import logo from './images/logo.png';

const Header = () => {
  const { t } = useContext(i18n);
  return (
    <div className={style['header-background']}>
      <header className={style.header}>
        <div className={style.logo}><Image src={logo} alt={t('logoAlt')} /></div>

      </header>
    </div>
  );
};

export default React.memo(Header);
