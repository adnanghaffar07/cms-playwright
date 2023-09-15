import { Page, expect, test } from '@playwright/test';
import { LoginPage } from './Login.page';

export const goToHomePage = (page: Page) =>
  test.step('Goto App Url', async () => {
    await page.goto(
      `/11/#${process.env.CMS_SKIN}/${process.env.CMS_ACCOUNT}/${process.env.CMS_SITE}`,
    );
  });

export const verifyLoginPage = (page: Page) =>
  test.step('Verify Login Page is Displaying', async () => {
    await expect(
      page.getByTestId(LoginPage.idLocators.loginView),
    ).toBeVisible();
  });
export const enterUsernameAndPassword = (
  page: Page,
  username: String,
  password: String,
) =>
  test.step('Enter Credentials to Login to App', async () => {
    await test.step(`Enter Username: ${username} `, async () => {
      await expect(
        page.getByTestId(LoginPage.idLocators.usernameInput),
      ).toBeVisible();
      await page
        .getByTestId(LoginPage.idLocators.usernameInput)
        .type(`${username}`, { delay: 50 });
    });
    await test.step(`Enter Password: ${password} `, async () => {
      await expect(
        page.getByTestId(LoginPage.idLocators.passwordInput),
      ).toBeVisible();
      await page
        .getByTestId(LoginPage.idLocators.passwordInput)
        .type(`${password}`, { delay: 50 });
    });
    await test.step(`Click on Login Button`, async () => {
      await expect(
        page.getByRole('button', { name: LoginPage.textLocators.loginBtn }),
      ).toBeVisible();
      await page
        .getByRole('button', { name: LoginPage.textLocators.loginBtn })
        .click();
    });
  });

export const verifyDashBoardPageIsDisplaying = (page: Page) =>
  test.step('Verify that user has successfully Logged In and Dashboard Is Displaying', async () => {
    await expect(
      page.getByTestId(LoginPage.idLocators.dashboardView),
    ).toBeVisible();
  });

export const verifyIncorrectCredsErrorMessage = (page: Page) =>
  test.step('Verify that user is able to see "The login information provided is invalid." Error Message', async () => {
    const alertMsgLocator = page
      .getByTestId(LoginPage.idLocators.loginAlertMsg)
      .first();
    await expect(alertMsgLocator).toBeVisible();
    expect(await alertMsgLocator.textContent()).toEqual(
      LoginPage.textLocators.errorMessageInvalidLogin,
    );
  });
