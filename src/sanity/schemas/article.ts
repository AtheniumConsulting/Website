import { defineArrayMember, defineField, defineType } from "@sanity/types";
import { reviewFields } from "./review-fields";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "State the insight. Do not use a label.",
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "evidence",
      title: "Evidence",
      description: "Every claim about an offering needs a harvested source.",
      type: "array",
      of: [defineArrayMember({ type: "evidence" })],
    }),
    defineField({
      name: "linkedInPostUrl",
      title: "LinkedIn post",
      description:
        "The LinkedIn post that points to this article. Add it after the article is published.",
      type: "url",
    }),
    defineField({
      name: "relatedPaper",
      title: "Related position paper",
      type: "reference",
      to: [{ type: "positionPaper" }],
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
