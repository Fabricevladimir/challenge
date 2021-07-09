import React, {useState, useContext, useEffect} from 'react';
import {auth} from '../Firebase/firebase';

const UserContext = React.createContext([undefined, undefined]);

function UserProvider({children}) {
  /************************************
   * State
   ************************************/
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

/************************************
 * Custom Hook
 ************************************/
function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Trying to access user outside of the UserProvider');
  }
  return context;
}

export {UserProvider, useUser};
