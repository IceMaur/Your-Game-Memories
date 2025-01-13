import React, { createContext, useState, useEffect } from 'react';

export const TempContext = createContext({userJwtToken: '', setUserJwtToken: (jwtToken) => {}});
export const UsernameContext = createContext({username: '', setUsername: (username) => {}});

function TempContextProvider({ children }) {
  function getInitialState(contextName) {
    const localStorageValue = localStorage.getItem(contextName);
    return localStorageValue ?? '';
  }

  const [userJwtToken, setUserJwtToken] = useState(getInitialState('userJwtToken'));
  const [username, setUsername] = useState(getInitialState('username'));

  useEffect(() => {
    localStorage.setItem('userJwtToken', userJwtToken)
  }, [userJwtToken])

  useEffect(() => {
    localStorage.setItem('username', username)
  }, [username])

  return (
    <TempContext.Provider value={{userJwtToken, setUserJwtToken}}>
      <UsernameContext.Provider value={{username, setUsername}}>
        { children }
      </UsernameContext.Provider>
    </TempContext.Provider>
  )
}

export default TempContextProvider;