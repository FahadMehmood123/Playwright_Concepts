import { test, expect } from "@playwright/test";

test("Login_ Applitool", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page
    .getByRole("textbox", { name: "Enter your username" })
    .fill("Fahad");
  await page.getByRole("textbox", { name: "password" }).fill("1234");
  await page.getByRole("link", { name: "Sign in" }).click();
});

test("Login_HRM", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.pause();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "TestName users" })
    .locator("i")
    .click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
  await page.pause();
});
