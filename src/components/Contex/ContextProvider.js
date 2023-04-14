import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const authProvider = createContext();
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const [DisplayMode, setDisplayMode] = useState(false);
  const GoogleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updataUser = (userInfo) => {
    // setLoader(true)
    return updateProfile(auth.currentUser, userInfo);
  };
  const LogOut = () => {
    return signOut(auth);
  };
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoader(false);
      setUser(user);

      return () => {
        unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    createUser,
    signIn,
    user,
    LogOut,
    updataUser,
    loader,
    LoginWithGoogle,
    DisplayMode,
    setDisplayMode,
  };
  return (
    <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
  );
};

export default ContextProvider;
