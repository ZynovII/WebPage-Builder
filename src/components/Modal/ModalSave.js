import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { ElementContext } from "../../context/new-elements/elementContext";
import { database } from "../../firebase/firebase";

export const ModalSave = ({ cbToggle }) => {
  const { elements, container, name, changeName } = useContext(ElementContext);
  const {user} = useContext(AuthContext);

  const modalRef = useRef();

  const saveToDB = async () => {
    await database.ref(`users/${user}`).push({name, container, elements});
    alert('Page successfuly saved!');
  }

  const changeHandler = (eo) => {
    changeName(eo.target.value);
  };

  const backgroundClick = (eo) => {
    if (modalRef.current === eo.target) {
      cbToggle();
    }
  };

  const saveHandler = () => {
    saveToDB();
    cbToggle();
  }

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        ref={modalRef}
        onClick={backgroundClick}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Saving</h5>
              <button className="btn btn-close" onClick={cbToggle}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Enter the name of your page</p>
              <div>
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={cbToggle}>
                Close
              </button>
              <button className="btn btn-success" onClick={saveHandler}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
