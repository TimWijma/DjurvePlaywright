const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Acties, Menu } = require('../../objects')

test('ChangeActionEdit', async ({ page, browser }) => {
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "boris@djurve.nl")

  await page.click(Menu.menuWorkstock)
  await page.click(Acties.Acties.li_first_action)
  await page.waitForTimeout(1000)
  await page.click(Acties.ChangeActionAndVerySave.button_Edit)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await page.click(Acties.buttonSave)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});