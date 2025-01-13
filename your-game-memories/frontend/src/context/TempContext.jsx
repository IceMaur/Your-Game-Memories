import React, { createContext, useState, useEffect } from 'react';

export const TempContext = createContext({userJwtToken: '', setUserJwtToken: (jwtToken) => {}});
export const UserNameContext = createContext({userName: '', setUserName: (userName) => {}});

function TempContextProvider({ children }) {
  function getInitialState(contextName) {
    const localStorageValue = localStorage.getItem(contextName);
    return localStorageValue ?? '';
  }

  const [userJwtToken, setUserJwtToken] = useState(getInitialState('userJwtToken'));
  const [userName, setUserName] = useState(getInitialState('userName'));

  useEffect(() => {
    localStorage.setItem('userJwtToken', userJwtToken)
  }, [userJwtToken])

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  return (
    <TempContext.Provider value={{userJwtToken, setUserJwtToken}}>
      <UserNameContext.Provider value={{userName, setUserName}}>
        { children }
      </UserNameContext.Provider>
    </TempContext.Provider>
  )
}

export default TempContextProvider;