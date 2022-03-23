import React, { useState, createContext } from "react";
import { getAuth } from "firebase/auth";
import {
  signInRequest,
  signUpRequest,
  signOutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  getAuth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onSignIn = (email, password) => {
    setIsLoading(true);
    signInRequest(email, password)
      .then((u) => {
        setUser(u);
        console.log(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onSignUp = (name, surname, email, password) => {
    setIsLoading(true);
    signUpRequest(name, surname, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onSignOut = () => {
    setIsLoading(true);
    signOutRequest()
      .then(() => {
        setIsLoading(false);
        setUser(null);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onSignIn,
        onSignUp,
        onSignOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
