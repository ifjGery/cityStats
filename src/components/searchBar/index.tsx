import React, { useContext } from 'react';

import { IconType } from 'Component/icon';
import Action from 'Component/action';

import i18n from 'Helper/i18nContext';
import globalContext from 'Helper/globalContext';

import style from './searchBar.less';

const SearchBar = () => {
  const { t } = useContext(i18n);
  const { searchString, updateSearch } = useContext(globalContext);
  const searchInput = <input value={searchString} onChange={(e) => updateSearch(e.target.value)} className={style.input} type="text" placeholder={t('searchPlaceholder')} />;
  return (
    <div className={style['search-bar']}>
      <Action icon={IconType.search} iconAlign="side" content={searchInput} contentAlign="side" />
    </div>
  );
};

export default SearchBar;
