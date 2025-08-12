import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders counter app", () => {
  render(<App />);
  expect(screen.getByText("Counter App")).toBeInTheDocument();
});

test("increments counter", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("increment"));
  expect(screen.getByTestId("count").textContent).toBe("Count: 1");
});

test("decrements counter", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("decrement"));
  expect(screen.getByTestId("count").textContent).toBe("Count: -1");
});
