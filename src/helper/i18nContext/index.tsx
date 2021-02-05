import React from 'react';

const t = (key : string) => {
    return key;
}

const Translate = React.createContext({
    t
});

export default Translate;