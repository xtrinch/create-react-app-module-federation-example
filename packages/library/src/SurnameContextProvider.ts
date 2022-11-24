import React from 'react';

export default React.createContext({
    name: 'Surname' as string,
    setName: (name: string) => {}
});