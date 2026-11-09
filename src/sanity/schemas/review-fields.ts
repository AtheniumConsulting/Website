import { defineField } from "@sanity/types";
import { REVIEW_STEPS } from "../publishing";

/** Fields shared by every document that follows the publishing flow. */
export const reviewFields = [
  defineField({
    name: "reviewStep",
    title: "Review step",
    type: "string",
    options: { list: [...REVIEW_STEPS], layout: "radio" },
    initialValue: "draft",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "reviewer",
    title: "Reviewer",
    description:
      "Required before approval. The author cannot review their own work.",
    type: "string",
  }),
  defineField({
    name: "publishedBy",
    title: "Published by",
    description: "A named publisher. Set when the document is published.",
    type: "string",
  }),
];
