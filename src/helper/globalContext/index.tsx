import React from 'react';

const defaultContext = {
    searchString: '',
    updateSearch: (value: string) => {}
}

const GlobalContext = React.createContext(defaultContext);

export default GlobalContext;