import React, { useContext, useEffect, useRef, useState } from "react";
import { ElementContext } from "../../../context/new-elements/elementContext";
import { ElementTemp } from "../ElementTemp/ElementTemp";

import "./Template.scss";

export const Template = ({ template }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const { elements, addElement } = useContext(ElementContext);

  const elementsThisTypeArr = elements.filter(
    (el) => el.type === template.type
  );

  const nodeRef = useRef(null);

  useEffect(() => {
    if (nodeRef !== null) {
      let sumHeight = 2; // margin child element
      if (nodeRef.current.children.length !== 0) {
        for (let i = 0; i < nodeRef.current.children.length; i++) {
          //adding height of children
          sumHeight += nodeRef.current.children[i].scrollHeight + 2; // +2 margin of child element
        }
      } else if (nodeRef.current.children.length === 0) {
        sumHeight = 0;
      } else {
        sumHeight = nodeRef.current.scrollHeight;
      }
      setHeight(isOpen && elementsThisTypeArr ? sumHeight : 0);
    }
  }, [isOpen, elementsThisTypeArr]);

  const handlerAdd = (event) => {
    let elementsCounter = elementsThisTypeArr.length;
    event.stopPropagation();
    let newId = JSON.stringify(new Date());
    addElement({
      ...template,
      name: `New ${template.name}${elementsCounter + 1}`,
      id: newId,
    });
  };

  const openHandler = () => {
    if (elementsThisTypeArr.length === 0) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="template-item">
      <div className="template-item__head" onClick={openHandler}>
        <div>
          <div className="template-item__title">
            {template.name}
            {elementsThisTypeArr.length > 0 && (
              <span>{" (" + elementsThisTypeArr.length + ")"}</span>
            )}
          </div>
          <span className="template-item__description">
            &lt;{template.dom.container}&gt;
          </span>
        </div>
        <button className="btn btn-outline-success" onClick={handlerAdd}>
          &#10010;
        </button>
      </div>
      <div
        className="template-item__children"
        ref={nodeRef}
        style={{ height: height + "px" }}
      >
        {elementsThisTypeArr.map((el) => (
          <ElementTemp key={el.id} elem={el} />
        ))}
      </div>
    </div>
  );
};
