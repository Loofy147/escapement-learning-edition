import { expect, test } from "@playwright/test";

test("reader to practice critical path preserves learner progress", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Learn to read the life inside a watch/i })).toBeVisible();
  await page.getByRole("button", { name: /Browse all 23 chapters/i }).click();
  await expect(page.getByRole("heading", { name: "Chapter library" })).toBeVisible();
  await page.getByRole("button", { name: /01 .*Equal seconds/i }).click();
  await expect(page.locator("article.reader h1")).toBeVisible();
  await page.getByRole("button", { name: "Practice", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Make a prediction/i })).toBeVisible();
  const firstExercise = page.locator("article.exercise-card").first();
  await firstExercise.locator(".options button").first().click();
  await firstExercise.getByRole("button", { name: "Check answer" }).click();
  await expect(firstExercise.getByText("Good reading.")).toBeVisible();
  await page.getByRole("button", { name: "Your progress" }).click();
  await expect(page.getByRole("heading", { name: /Progress is a/i })).toBeVisible();
  await expect(page.locator(".stats-grid").first()).toContainText("1");
  const saved = await page.evaluate(() => localStorage.getItem("escapement-progress"));
  expect(saved).toContain("ch-01");
});

test("public readers can discover account sync without being blocked", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /Sign in to sync/i })).toBeVisible();
});
