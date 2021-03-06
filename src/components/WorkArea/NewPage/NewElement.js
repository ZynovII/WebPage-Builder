import React, { useContext, useState } from "react";
import { ElementContext } from "../../../context/new-elements/elementContext";
import { Footer } from "./elements/Footer";
import { Header } from "./elements/Header";
import { PicAndText } from "./elements/PicAndText";
import { Text } from "./elements/Text";
import { Block } from "./elements/Block";
import { Picture } from "./elements/Picture";
import { ModalEdit } from "./ModalEdit/ModalEdit";
import { Portal } from "../../Portal/Portal";


export const NewElement = ({ el, index, mode }) => {
  const {
    elements,
    changeOrder,
    selectedElementID,
    selectElement,
  } = useContext(ElementContext);

  const [isEditable, setEditable] = useState(false);

  let domElement;
  switch (el.type) {
    case "header":
      domElement = <Header element={el} editable={isEditable} />;
      break;
    case "section":
      domElement = <PicAndText element={el} editable={isEditable} />;
      break;
    case "footer":
      domElement = <Footer element={el} editable={isEditable} />;
      break;
    case "text":
      domElement = <Text element={el} editable={isEditable} />;
      break;
    case "block":
      domElement = <Block element={el} editable={isEditable} />;
      break;
    case "picture":
      domElement = <Picture element={el} src={el.dom.src} editable={isEditable} />;
      break;
    default:
      break;
  }

  const swap = (curr, next, arr) => {
    let newOrderedArr = arr.slice();
    newOrderedArr[curr] = newOrderedArr.splice(next, 1, newOrderedArr[curr])[0];
    return newOrderedArr;
  };

  const upHandler = (eo) => {
    eo.stopPropagation();
    if (index === 0) return;
    changeOrder(swap(index, index - 1, elements));
  };

  const downHandler = (eo) => {
    eo.stopPropagation();
    if (index === elements.length - 1) return;
    changeOrder(swap(index, index + 1, elements));
  };

  const selectHandler = (eo, id) => {
    eo.stopPropagation();
    selectElement(id);
  };

  const edittingHandler = (eo) => {
    eo.stopPropagation();
    setEditable(!isEditable);
  }

  if(mode==='editing') {
    return (
      <div
        key={el.id}
        className={
          selectedElementID !== el.id ? "new-element" : "new-element_selected"
        }
        onClick={(eo) => selectHandler(eo, el.id)}
      >
        <span onClick={(eo)=>selectHandler(eo, null)} >
          {
              selectedElementID === el.id && 
              <>
                  <button onClick={edittingHandler}>{isEditable ? 'Ok' : 'Edit'}</button>
                  <button onClick={upHandler}>Move Up</button>
                  <button onClick={downHandler}>Move Down</button>
              </>
          }
          {el.name}
        </span>
        {domElement}
        {
            isEditable && 
            <Portal>
                <ModalEdit element={el} cbSetEditable={setEditable} />
            </Portal>
        }
      </div>
    );
  }

  return (
    <div>
      {domElement}
    </div>
  );
};
