import React, { useState } from 'react';
import Glob from 'Helper/globalContext';

export declare interface LocalisationProps {
  children: React.ReactNode
}

const GlobalContext = ({ children }: LocalisationProps) => {
  const [searchString, setSearchString] = useState('');
  const updateSearch = (value: string) => setSearchString(value);
  return (
    <Glob.Provider value={{ searchString, updateSearch }}>
      {children}
    </Glob.Provider>
  );
};

export default GlobalContext;
