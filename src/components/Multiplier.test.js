import { render, fireEvent, screen } from "@testing-library/react";

import Multiplier from "./Multiplier";

//test block
test("multiply counter", () => {
  // render the component on virtual dom
  render(<Multiplier />);

  //select the elements you want to interact with
  const multiplier = screen.getByTestId("multiplier");
  const multiplyBtn = screen.getByTestId("multiply");

  //interact with those elements
  fireEvent.click(multiplyBtn);

  //assert the expected result
  expect(multiplier).toHaveTextContent("1");
});
