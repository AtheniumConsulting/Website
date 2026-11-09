import { defineArrayMember, defineField, defineType } from "@sanity/types";
import { reviewFields } from "./review-fields";

export const positionPaper = defineType({
  name: "positionPaper",
  title: "Position paper",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "State the position. Do not use a label.",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "Three sentences at most.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "file",
      title: "Paper file",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "evidence",
      title: "Evidence",
      type: "array",
      of: [defineArrayMember({ type: "evidence" })],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      readOnly: true,
    }),
    ...reviewFields,
  ],
});
