import { defineArrayMember, defineField, defineType } from "@sanity/types";
import { reviewFields } from "./review-fields";

export const offering = defineType({
  name: "offering",
  title: "Offering",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: { list: ["product", "service"], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      description:
        "One sentence that states the outcome the offering delivers.",
      type: "string",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "evidence",
      title: "Evidence",
      description: "At least one harvested source is required before approval.",
      type: "array",
      of: [defineArrayMember({ type: "evidence" })],
      validation: (rule) => rule.required().min(1),
    }),
    ...reviewFields,
  ],
});
