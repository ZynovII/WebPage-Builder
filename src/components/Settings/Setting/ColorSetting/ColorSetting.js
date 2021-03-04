import React, { useContext } from "react";
import { ElementContext } from "../../../../context/new-elements/elementContext";

export const ColorSetting = ({ elem }) => {
  const { elements, container, changeElement, changeContainer } = useContext(ElementContext);

  const currentElement = elements.find((v) => v.id === elem.id) || container;

  const onChangeBackgroundHandler = (eo) => {
    let newStyledElem = {
      ...currentElement,
      style: {
        ...currentElement.style,
        container: {
          ...currentElement.style.container,
          backgroundColor: eo.target.value,
        },
      },
    };
    currentElement !== container
      ? changeElement(newStyledElem)
      : changeContainer(newStyledElem);
  };
  const onChangeColorHandler = (eo) => {
    let newStyledElem = {
      ...currentElement,
      style: {
        ...currentElement.style,
        container: {
          ...currentElement.style.container,
          color: eo.target.value,
        },
      },
    };
    currentElement !== container
      ? changeElement(newStyledElem)
      : changeContainer(newStyledElem);
  };

  return (
    <div className="color-setting">
      <div className="color-setting__background">
        <label htmlFor="input-color" className="form-label">
          Background color
        </label>
        <input
          type="color"
          className="form-control form-control-sm form-control-color"
          title="Choose color"
          id="input-color"
          value={currentElement.style.container.backgroundColor}
          onChange={onChangeBackgroundHandler}
        />
      </div>
      <div className="color-setting__font">
        <label htmlFor="input-color" className="form-label">
          Font color
        </label>
        <input
          type="color"
          className="form-control form-control-sm form-control-color"
          title="Choose color"
          id="input-color"
          value={currentElement.style.container.color || "#ffffff"}
          onChange={onChangeColorHandler}
        />
      </div>
    </div>
  );
};
