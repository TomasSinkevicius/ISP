import { createContext, useContext } from 'react';

const FirebaseContext = createContext({});

export const useFirebase = () => useContext(FirebaseContext);

export default FirebaseContext;
