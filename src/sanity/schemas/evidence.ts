import { defineField, defineType } from "@sanity/types";

/** A claim about an offering must trace to harvested material. This object records that trace. */
export const evidence = defineType({
  name: "evidence",
  title: "Evidence",
  type: "object",
  fields: [
    defineField({
      name: "claim",
      title: "Claim",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Harvested source",
      description: "The harvested document or record that supports the claim.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sourceDate",
      title: "Source date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
});
