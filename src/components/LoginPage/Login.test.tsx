import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import prepareReduxWrapper from "../../lib/prepareReduxWrapper";
import Login from "./Login";
import React from "react";
// import { todosActions } from '../modules/todos';
import { BrowserRouter } from "react-router-dom";
import "mutationobserver-shim";

describe("LoginRender", () => {
  const setup = () => {
    const [Wrapper, store] = prepareReduxWrapper();
    render(
      <Wrapper>
        <BrowserRouter>
          <Login></Login>
        </BrowserRouter>
      </Wrapper>
    );
    return { store };
  };
  it("renders properly", () => {
    setup();
  });
  it("fffff", () => {
    const { store } = setup();

    const input = screen.getByPlaceholderText("이름을 입력해 주세요");
    const button = screen.getByText("확인");

    fireEvent.change(input, {
      target: {
        value: "건우",
      },
    });
    expect(input).toHaveValue("건우");
    // fireEvent.click(button);
    console.log(button);
    fireEvent.click(button);
    expect(input).toHaveValue("1");

    // console.log(input);
    // expect(store.getActions());
  });
});
