import React from "react";

export const Loader = () => (
  <>
    <div className="modal-backdrop show"></div>
    <div>
        <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
        </div>
    </div>
  </>
);
