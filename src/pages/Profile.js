import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginBtn } from "../components/AppHeader/LoginBtn/LoginBtn";
import { Loader } from "../components/Loader/Loader";
import { AuthContext } from "../context/auth/authContext";
import { ElementContext } from "../context/new-elements/elementContext";
import { database } from "../firebase/firebase";

import './Profile.scss';


export const Profile = () => {
  const [pages, setPages] = useState();
  const { user, logout, loading } = useContext(
    AuthContext
  );
  const { loadPage } = useContext(ElementContext);
  const history = useHistory();

  const logoutHandler = () => {
    logout();
    history.push("/Login");
  };

  const deliteHandler = (key, eo) => {
    eo.stopPropagation();
    database.ref(`users/${user}/${key}`).remove();
  };

  const selectPage = (page) => {
    loadPage(page);
    history.push("/Constructor");
  };

  useEffect(() => {
    const db = database.ref(`users/${user}`);
    db.on("value", (el) => {
      setPages(el.val());
    });
    return () => db.off();
  });

  const pagesKeys = pages && Object.keys(pages);

  if (!user) {
    return (
      <div className="auth-page container mt-4">
        <h1>You are not authorized</h1>
        <LoginBtn />
      </div>
    );
  }

  return (
    <div className="auth-page container mt-4">
    {loading ? <Loader /> : null}
      <h3 className="mb-5">{user}</h3>
      <ul className="list-group profile-list">
        {pages &&
          pagesKeys.map((key) => (
            <li
              key={key}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center "
              onClick={() => selectPage(pages[key])}
            >
              {pages[key].name}
              <button
                className="btn btn-outline-danger btn-sm"
                title="delite page"
                onClick={(eo) => deliteHandler(key, eo)}
              >
                &times;
              </button>
            </li>
          ))}
      </ul>
      <button className="btn btn-secondary btn-lg mt-4" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};
