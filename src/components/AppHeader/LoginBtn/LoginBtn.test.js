import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginBtn } from "./LoginBtn";
import { AuthContext } from "../../../context/auth/authContext";
import { BrowserRouter, Switch } from "react-router-dom";

describe("LoginBtn", () => {
  test("text in button with user", () => {
    const user = "test";
    render(
      <AuthContext.Provider value={{ user }}>
        <LoginBtn />
      </AuthContext.Provider>
    );
    expect(screen.getByRole("button")).toHaveValue("Profile");
  });
  test("text in button without user", () => {
    const user = null;
    render(
      <AuthContext.Provider value={{ user }}>
        <LoginBtn />
      </AuthContext.Provider>
    );
    expect(screen.getByRole("button")).toHaveValue("Login");
  });
  test("calling func with button", () => {
    const user = null;
    const cbClose = jest.fn();
    render(
      <AuthContext.Provider value={{ user }}>
        <BrowserRouter>
          <LoginBtn cbClose={cbClose} />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(cbClose).toHaveBeenCalledTimes(1);
  });
});
