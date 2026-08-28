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

test("chapter completion and reload restore remain available to public readers", async ({ page }) => {
  await page.goto("/read/ch-01");
  await expect(page.locator("article.reader h1")).toBeVisible();
  await page.getByRole("button", { name: /Mark complete/i }).click();
  await expect(page.getByRole("button", { name: /Completed/i })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("button", { name: /Completed/i })).toBeVisible();
});

test("public readers can discover account sync without being blocked", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /Sign in to sync/i })).toBeVisible();
});

test("learning intelligence records temporal assessment evidence", async ({ page }) => {
  await page.goto("/learning");
  await expect(page.getByRole("heading", { name: /Measure learning across time/i })).toBeVisible();

  for (const stage of ["pre", "post"] as const) {
    await page.getByRole("button", { name: `Start ${stage}` }).click();
    for (let question = 0; question < 6; question += 1) {
      const options = page.locator("section").filter({ hasText: "Six concept-linked questions create comparable pre, post, and delayed evidence." }).getByRole("button");
      await expect(options.first()).toBeVisible();
      await options.first().click();
    }
    await page.getByRole("button", { name: "Save assessment event" }).click();
  }

  await expect(page.getByText(/Pre → post change:/)).toBeVisible();
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("escapement-learning-state") || "{}"));
  expect(saved.events.filter((event: { kind: string }) => event.kind === "assessment")).toHaveLength(2);
});

test("learning intelligence grades a ready transfer task deterministically", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("escapement-progress", JSON.stringify({ viewed: [], completed: [], attempts: { "ex-rate": 3, "ex-experiment": 3 }, mastered: [], current: "ch-01", evidence: { confidence: { "ex-rate": 1, "ex-experiment": 1 } } }));
  });
  await page.goto("/learning");
  const transfer = page.locator("section").filter({ hasText: "Choose a diagnosis, then see why." });
  await expect(transfer.getByText("Ready").first()).toBeVisible();
  await transfer.locator("button").first().click();
  await expect(transfer.getByText("Correct transfer judgment.")).toBeVisible();
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("escapement-learning-state") || "{}"));
  expect(saved.transfer["transfer-rate-position"].attempts).toBe(1);
});
