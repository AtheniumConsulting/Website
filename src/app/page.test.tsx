import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("states the Athenium strapline as the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Connected technologies meet industry expertise.",
      }),
    ).toBeInTheDocument();
  });

  it("carries the Athenium logo with an accessible name", () => {
    render(<Home />);
    expect(screen.getByAltText("Athenium Consulting")).toBeInTheDocument();
  });
});
