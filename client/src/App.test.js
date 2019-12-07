import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Navbar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";

test("renders without crashing", () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper).toBeVisible;
});
test("renders NavBar component", () => {
  const wrapper = rtl.render(<Navbar />);

  const element = wrapper.getByText(/toggle/i);

  expect(element).toBeInTheDocument();
});
test("renders PlayerCard component", () => {
  const wrapper = rtl.render(<PlayerCard />);

  const element = wrapper.toBeVisable;

  expect(element).toBeInTheDocument();
});
