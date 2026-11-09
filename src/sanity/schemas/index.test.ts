import { describe, expect, it } from "vitest";
import { advance, REVIEW_STEPS } from "../publishing";
import { schemaTypes } from "./index";

describe("schemas", () => {
  it("defines article, offering, position paper and evidence", () => {
    expect(schemaTypes.map((type) => type.name).sort()).toEqual([
      "article",
      "evidence",
      "offering",
      "positionPaper",
    ]);
  });

  it("gives every document type the review fields", () => {
    for (const type of schemaTypes.filter((t) => t.type === "document")) {
      const names = (type.fields ?? []).map((field) => field.name);
      expect(names).toEqual(
        expect.arrayContaining(["reviewStep", "reviewer", "publishedBy"]),
      );
    }
  });

  it("carries an evidence field on an offering", () => {
    const offering = schemaTypes.find((type) => type.name === "offering");
    expect(offering?.fields?.some((field) => field.name === "evidence")).toBe(
      true,
    );
  });
});

describe("publishing flow", () => {
  it("moves an article from draft to published through the agreed steps", () => {
    expect(REVIEW_STEPS[0]).toBe("draft");
    expect(advance("draft", { name: "[author name]" })).toEqual({
      ok: true,
      next: "in-review",
    });
    expect(
      advance("in-review", {
        name: "[author name]",
        reviewerName: "[reviewer name]",
      }),
    ).toEqual({ ok: true, next: "approved" });
    expect(advance("approved", { name: "[publisher name]" })).toEqual({
      ok: true,
      next: "published",
    });
  });

  it("refuses approval without a different reviewer", () => {
    expect(advance("in-review", { name: "[author name]" }).ok).toBe(false);
    expect(advance("in-review", { name: "[a]", reviewerName: "[a]" }).ok).toBe(
      false,
    );
  });

  it("refuses publication by anyone who is not a named publisher", () => {
    expect(advance("approved", { name: "[someone else]" }).ok).toBe(false);
  });

  it("refuses to advance a published document", () => {
    expect(advance("published", { name: "[publisher name]" }).ok).toBe(false);
  });
});
