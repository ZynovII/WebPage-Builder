import React from "react";
import { render, screen } from "@testing-library/react";
import { ModalSave } from "./ModalSave";
import { AuthContext } from "../../context/auth/authContext";
import { ElementContext } from "../../context/new-elements/elementContext";

describe("ModalSave window", () => {
  test("default value in input", () => {
    const elements = null; 
    const container = null;
    const name = 'test name'; 
    const changeName = jest.fn();
    const user = 'test';
    render(
      <AuthContext.Provider value={{user}}>
        <ElementContext.Provider value={{elements, container, name, changeName}}>
          <ModalSave />
        </ElementContext.Provider>
      </AuthContext.Provider>
    );
    expect(screen.getByRole('textbox')).toHaveValue('test name');
  });
});