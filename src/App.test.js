import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Table Header", () => {
  test("renders Image th", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Image/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Name th", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Phone th", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Phone/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Email th", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Email/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders learn Dob th", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/DOB/i);
    expect(linkElement).toBeInTheDocument();
  });
});
