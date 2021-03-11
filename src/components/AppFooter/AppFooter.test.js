import React from "react";
import { render, screen } from "@testing-library/react";
import { AppFooter } from "./AppFooter";
import { AuthContext } from "../../context/auth/authContext";
import { ElementContext } from "../../context/new-elements/elementContext";

describe("AppFooter button", () => {
  test("disabled save button", () => {
    const deleteAllElements = jest.fn();
    const user = null;
    render(
      <AuthContext.Provider value={{user}}>
        <ElementContext.Provider value={{deleteAllElements}}>
          <AppFooter />
        </ElementContext.Provider>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/Save/)).toBeDisabled();
  });
});
