import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Config/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Google = new GoogleAuthProvider();
const github = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("null");
  const [isLoading, setIsLoading] = useState(true);

  const googleUser = () => {
    setIsLoading(true);
    return signInWithPopup(auth, Google);
  };

  const githubUser = () => {
    setIsLoading(true);
    return signInWithPopup(auth, github);
  };

  const creteUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    isLoading(true);
    return signOut(auth);
  };

  const AuthInfo = {
    user,
    isLoading,
    creteUser,
    login,
    logout,
    googleUser,
    githubUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
