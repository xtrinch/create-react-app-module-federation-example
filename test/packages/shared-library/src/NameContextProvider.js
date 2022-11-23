import React from 'react';

export const NameContextProvider = React.createContext({
    name: 'Mr.Noname',
    setName: (name) => {}
});