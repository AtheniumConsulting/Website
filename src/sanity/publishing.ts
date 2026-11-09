/**
 * The agreed publishing flow for Sanity content.
 * A document moves one step at a time. Only a named publisher may take the final step.
 * The named publishers are a team decision. Until the team supplies them the list holds a placeholder.
 */
export const REVIEW_STEPS = [
  "draft",
  "in-review",
  "approved",
  "published",
] as const;

export type ReviewStep = (typeof REVIEW_STEPS)[number];

export const NAMED_PUBLISHERS: readonly string[] = ["[publisher name]"];

export type Transition =
  { ok: true; next: ReviewStep } | { ok: false; reason: string };

export function advance(
  current: ReviewStep,
  actor: { name: string; reviewerName?: string },
): Transition {
  const index = REVIEW_STEPS.indexOf(current);
  if (index === REVIEW_STEPS.length - 1) {
    return { ok: false, reason: "The document is already published." };
  }
  const next = REVIEW_STEPS[index + 1];
  if (next === "approved" && actor.reviewerName === undefined) {
    return { ok: false, reason: "A reviewer must be named before approval." };
  }
  if (next === "approved" && actor.reviewerName === actor.name) {
    return { ok: false, reason: "The author cannot review their own work." };
  }
  if (next === "published" && !NAMED_PUBLISHERS.includes(actor.name)) {
    return { ok: false, reason: "Only a named publisher may publish." };
  }
  return { ok: true, next };
}
