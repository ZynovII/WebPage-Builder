import React from "react";

export const Loader = () => (
  <>
    <div className="modal-backdrop show"></div>
    <div className='d-flex justify-content-center align-items-center' style={{minHeight: 'calc(100vh - 108px)'}}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
        </div>
    </div>
  </>
);
