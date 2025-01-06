import React, { createContext, useState } from 'react';

export const TempContext = createContext({userJwtToken: '', setUserJwtToken: (jwtToken) => {}});

function TempContextProvider({ children }) {
  const [userJwtToken, setUserJwtToken] = useState('');

  return (
    <TempContext.Provider value={{userJwtToken, setUserJwtToken}}>
      { children }
    </TempContext.Provider>
  )
}

export default TempContextProvider;