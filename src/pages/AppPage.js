import React, { useContext, useState } from "react";
import { Settings } from "../components/Settings/Settings";
import { WorkArea } from "../components/WorkArea/WorkArea";
import { Templates } from "../components/Templates/Templates";
import { AppFooter } from "../components/AppFooter/AppFooter";

import "./AppPage.scss";
import { AuthContext } from "../context/auth/authContext";
import { Loader } from "../components/Loader/Loader";

export const AppPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const { loading } = useContext(AuthContext);

  
  if(loading) {
    return <Loader />
  }

  return (
    <>
      <div className="app-page">
        <div className="app-page__main-area">
          {isSettingsOpen && <Settings />}
          <WorkArea />
          <Templates />
        </div>
        <AppFooter isOpen={isSettingsOpen} cbIsOpen={setIsSettingsOpen} />
      </div>
      <div className="small-display auth-page container mt-5">
          <h2>
            Sorry, dislplay is too small. Try using landscape orientation
          </h2>
      </div>
    </>
  );
};
