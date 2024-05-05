import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firbase.init";
export const authContext = createContext(null);
const Provider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState("jana nai");
  const [loading, setloding] = useState(true);

  //login with google
  const googleLogin = () => {
    setloding(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  const FaceBookLogin = () => {
    setloding(true);
    return signInWithPopup(auth, FacebookProvider);
  };
  const createUser = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setloding(false);
      } else {
        setUser(null);
      }
    }),
    []
  );
  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    googleLogin,
    FaceBookLogin,
    loading,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default Provider;
