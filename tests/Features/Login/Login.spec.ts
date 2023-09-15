import { test } from '@playwright/test';
import {
  enterUsernameAndPassword,
  goToHomePage,
  verifyDashBoardPageIsDisplaying,
  verifyIncorrectCredsErrorMessage,
  verifyLoginPage,
} from '../../Pages/Login/Login.step';

test.describe('Feature - Login To Application', () => {
  //Before Hook goto baseURL
  test.beforeEach(async ({ page }) => {
    await goToHomePage(page);
  });

  test('Verify that user is able to login with valid credentials', async ({
    page,
  }) => {
    const username = process.env.CMS_USERNAME as string;
    const password = process.env.CMS_PASSWORD as string;
    await verifyLoginPage(page);
    await enterUsernameAndPassword(page, username, password);
    await verifyDashBoardPageIsDisplaying(page);
  });
  // <-------------------Negative TestCase ---------------------->
  test('Verify that user is not able to login with wrong credentials', async ({
    page,
  }) => {
    const username = 'adnan123';
    const password = 'adnan123';
    await verifyLoginPage(page);
    await enterUsernameAndPassword(page, username, password);
    await verifyIncorrectCredsErrorMessage(page);
  });
});
