import React from "react";
import { useHistory } from "react-router-dom";

import "./MainPage.scss";

export const MainPage = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/Constructor");
  }

  return (
    <div className="main-page container mt-4">
      <h1 className="p-2 pl-5">Welcome to WebPage Builder!</h1>
      <p className="main-page__text p-3">
        Here you can build your own little web page, costomise it and save
      </p>
      <div className="main-page__start">
        <button className="main-page__start__redirect" onClick={handleClick}>
          Lets start!
        </button>
      </div>
    </div>
  );
};
