import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("states the headline as the single main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Technology built for the work of Africa's resources.",
      }),
    ).toBeInTheDocument();
  });

  it("carries the Athenium logo with an accessible name", () => {
    render(<Home />);
    expect(screen.getByAltText("Athenium Consulting")).toBeInTheDocument();
  });
});
