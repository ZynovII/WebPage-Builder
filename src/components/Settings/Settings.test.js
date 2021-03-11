import React from "react";
import { render, screen } from "@testing-library/react";
import { Settings } from "./Settings";
import { ElementContext } from "../../context/new-elements/elementContext";

describe("Settings input value", () => {
  test("value in input is default", () => {
    const elem1 = {type: 'header', name: 'testName1', id: 0, style: {container: {color: '#000', backgroundColor: '#fff'}}};
    const elem2 = {type: 'picture', name: 'testName2', id: 1, style: {container: {color: '#000', backgroundColor: '#fff'}}};
    const elements = [elem1, elem2]; 
    const container = {style:{container: {color: '#000', backgroundColor: '#fff'}}};
    const changeElement = jest.fn();
    const changeContainer = jest.fn();
    render(
        <ElementContext.Provider value={{elements, container, changeContainer, changeElement}}>
          <Settings />
        </ElementContext.Provider>
      );
    expect(screen.getAllByRole('combobox')[0]).toHaveValue('');
    expect(screen.getAllByRole('combobox')[1]).toHaveValue('400');
  });
});