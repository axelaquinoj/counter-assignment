// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter.js";
import React from "react";

let countElement;

beforeEach(() => {
    render(<Counter />);
    countElement = screen.getByTestId("count");
});
test("renders counter message", () => {
    const counterMessage = screen.getByText("Counter");
    expect(counterMessage).toBeInTheDocument();
});
test('should render initial count with value of 0', () => {
    expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);

    expect(countElement.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);

    expect(countElement.textContent).toBe("-1");
});
