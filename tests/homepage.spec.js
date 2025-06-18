// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:5173");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle("Vite + React");

	await expect(page.getByTestId("transaction-1")).toContainText("50");

	await page.getByTestId("save").click();

	await expect(page.getByTestId("transaction-1")).toContainText("70");
});
