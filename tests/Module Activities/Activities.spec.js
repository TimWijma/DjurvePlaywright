const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Shortcuts, Activities, Actors } = require('../../objects')

test('Activities', async ({ page, browser }) => {
  let code = (Math.random() + 1).toString(36).substring(2,6);

  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "boris@djurve.nl")

  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Basics.a_Management)
  await page.click(Activities.a_codeActivities)
  await page.click(Activities.button_add)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.fill(Activities.input_Name_txtname, "Activity " + code)
  await page.fill(Activities.textarea_Info_txtinfo, "This is a new activity")
  await page.fill(Activities.input_Code_txtcode, code)
  await page.fill(Activities.textarea_Wiki_txtwiki, "TESTING")
  await page.click(Activities.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await page.click(Activities.a_codeActivities)
  await page.click(Actors.i_search)
  await page.fill(Actors.input_search, "Activity " + code)
  await page.keyboard.down('Enter');
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Activities.first_activity)
  await expect(page.locator("text=This is a new activity")).toBeVisible()

  await context.close()
});