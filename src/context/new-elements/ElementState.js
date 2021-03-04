import React, { useEffect, useReducer } from "react";
import { standartContainer } from "../../components/Templates/StandartElement";
import {
  ADD_ELEMENT,
  CHANGE_CONTAINER,
  CHANGE_ELEMENT,
  CHANGE_ORDER,
  DELITE_ALL,
  DELITE_ELEMENT,
  SELECT_ELEMENT,
} from "../types";
import { ElementContext } from "./elementContext";
import { elementReducer } from "./elementReducer";

const initialState = localStorage.getItem("newPage")
  ? JSON.parse(localStorage.getItem("newPage"))
  : {
      container: standartContainer,
      elements: [],
      selectedElementID: null,
    };


export const ElementState = ({ children }) => {
  const [state, dispatch] = useReducer(elementReducer, initialState);

  useEffect( () => {
      localStorage.setItem('newPage', JSON.stringify(state));
  }, [state]);

  const addElement = (elem) => {
    dispatch({
      type: ADD_ELEMENT,
      payload: elem,
    });
  };

  const changeElement = (elem) => {
    dispatch({
      type: CHANGE_ELEMENT,
      payload: elem,
    });
  };

  const deliteElement = (elId) => {
    dispatch({
      type: DELITE_ELEMENT,
      id: elId,
    });
  };

  const selectElement = (elId) => {
    dispatch({
      type: SELECT_ELEMENT,
      id: elId,
    });
  };

  const changeContainer = (elem) => {
    dispatch({
      type: CHANGE_CONTAINER,
      payload: elem,
    });
  };

  const deliteAllElements = () => {
    dispatch({
      type: DELITE_ALL,
      payload: standartContainer
    });
  };

  const changeOrder = (elements) => {
    dispatch({
      type: CHANGE_ORDER,
      payload: elements,
    });
  };

  return (
    <ElementContext.Provider
      value={{
        addElement,
        changeElement,
        deliteElement,
        changeOrder,
        changeContainer,
        selectElement,
        deliteAllElements,
        elements: state.elements,
        container: state.container,
        selectedElementID: state.selectedElementID,
      }}
    >
      {children}
    </ElementContext.Provider>
  );
};
