import { expect, test } from "@playwright/test";

test("home page shows the strapline, the logo and Lato type", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Athenium Consulting");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveText(
    "Connected technologies meet industry expertise.",
  );
  await expect(page.getByAltText("Athenium Consulting")).toBeVisible();
  const family = await heading.evaluate(
    (el) => getComputedStyle(el).fontFamily,
  );
  expect(family).toMatch(/lato/i);
});
