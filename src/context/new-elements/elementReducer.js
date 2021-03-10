import {
  ADD_ELEMENT,
  CHANGE_CONTAINER,
  CHANGE_ELEMENT,
  CHANGE_NAME,
  CHANGE_ORDER,
  DELITE_ALL,
  DELITE_ELEMENT,
  LOAD,
  SELECT_ELEMENT,
} from "../types";

export const elementReducer = (state, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      return { ...state, elements: [...state.elements, action.payload] };
    case CHANGE_ELEMENT:
      return {
        ...state,
        elements: state.elements.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case DELITE_ELEMENT:
      return {
        ...state,
        elements: state.elements.filter((el) => el.id !== action.id),
      };
    case DELITE_ALL:
      return { ...state, elements: [], container: action.payload };
    case SELECT_ELEMENT:
      return { ...state, selectedElementID: action.id };
    case CHANGE_CONTAINER:
      return { ...state, container: action.payload };
    case CHANGE_ORDER:
      return { ...state, elements: action.payload };
    case LOAD:
      return { ...state, ...action.payload };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
