import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

describe("Header checks", () => {
  test("Displays Header Title", () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Employee Directory/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Displays Header Text", () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(
      /Click on the carrots to filter by heading or use the search box to narrow your results./i
    );
    expect(linkElement).toBeInTheDocument();
  });
});
