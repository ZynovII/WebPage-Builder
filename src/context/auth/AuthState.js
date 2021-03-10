import { useEffect, useReducer } from "react";
import { LOGIN, LOGOUT, SET_LOADING, DONE } from "../types";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";
import firebase from "firebase/app";
import { firebaseApp } from "../../firebase/firebase";

export const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    authorized: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const showLoader = () => dispatch({ type: SET_LOADING });
  const hideLoader = () => dispatch({ type: DONE });

  const authHandler = async (authData) => {
    const { displayName } = authData.user;
    dispatch({
      type: LOGIN,
      payload: displayName,
    });
  };

  const login = () => {
    showLoader();
    const authPrvider = new firebase.auth["GithubAuthProvider"]();
    firebaseApp.auth().signInWithPopup(authPrvider).then(authHandler);
  };

  const logout = async () => {
    await firebase.auth().signOut();
    localStorage.removeItem("newPage");
    dispatch({ type: LOGOUT });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authHandler({ user });
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        showLoader,
        hideLoader,
        user: state.user,
        loading: state.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
