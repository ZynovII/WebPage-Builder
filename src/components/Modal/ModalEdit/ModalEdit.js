import React, { useContext, useEffect, useRef, useState } from "react";
import { ElementContext } from "../../../context/new-elements/elementContext";

import "./ModalEdit.scss";

export const ModalEdit = ({ element, cbSetEditable }) => {
  const { changeElement } = useContext(ElementContext);
  const [textValue, setTextValue] = useState(element.content.text);
  const [srcValue, setSrcValue] = useState(element.content.src);

    const textRef = useRef();
    const linkRef = useRef();

    useEffect( () => {
        if(textValue){
            textRef.current.focus();
        }
        if(srcValue) {
            linkRef.current.focus();
        }
    },[textValue, srcValue])

  const textHandler = (eo) => {
    setTextValue(eo.target.value);
  };
  const srcHandler = (eo) => {
    setSrcValue(eo.target.value);
  };

  const submitHandler = () => {
    let newElementContent = {
      ...element,
      content: {
        ...element.content,
        text: textValue ? textValue : undefined,
        src: srcValue ? srcValue : undefined,
      },
    };
    changeElement(newElementContent);
    cbSetEditable();
  };

  return (
    <div className="modal-element_edit">
      <div className="field-templates__head">Editting</div>
      <div className="field-templates__body">
        {textValue && (
          <div className="modal-element__text">
            <label htmlFor="edit-text">Your text</label>
            <textarea
              id="edit-text"
              className="form-control"
              value={textValue}
              onChange={textHandler}
              rows="14"
              ref={textRef}
            ></textarea>
          </div>
        )}
        {srcValue && (
          <div className="modal-element__src">
            <label htmlFor="edit-src">Link to your image</label>
            <input
              type="text"
              id="edit-src"
              className="form-control"
              value={srcValue}
              onChange={srcHandler}
              ref={linkRef}
            />
          </div>
        )}
      </div>
      <div>
        <button className="btn btn-success" onClick={submitHandler}>
          Ok
        </button>
      </div>
    </div>
  );
};
