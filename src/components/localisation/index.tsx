import React from 'react';
import Loc from 'Helper/i18nContext';

/* TODO: implement a proper i18n support */
const i18n: {[key: string]: string} = {
  searchPlaceholder: 'City (Ex.: Zurich)',
  searchLimitBanner: 'Note: Only the first 25 hits are displayed',
  logoAlt: 'Logo for city stats webpage',
};
export declare interface LocalisationProps {
  children: React.ReactNode
}

const t = (key: string) => {
  if (key in i18n) return i18n[key];
  return key;
};

const Localisation = ({ children }: LocalisationProps) => (
  <Loc.Provider value={{ t }}>
    {children}
  </Loc.Provider>
);

export default Localisation;
