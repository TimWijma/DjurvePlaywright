const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Menu, Basics, Acties } = require('../../objects')

test('Anonymous registration', async ({ page, browser }) => {
//   page.on('dialog', dialog => dialog.accept());
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "boris@djurve.nl")

  await page.click(Acties.Anonymous.div_Quality)
  await expect(page.locator(Acties.Anonymous.div_anonymous)).toHaveText("This registration is completely anonymous. It is not registered who made this report.")
  await page.fill(Acties.Anonymous.input_Title_name, "This is an anymous registration")
  await page.click(Acties.Anonymous['a_Gaan we door_light green_gray'])
  await page.selectOption(Acties.selectLocation, "00000000-0000-0000-0000-000000000000")
  await page.click(Acties.Anonymous.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Menu.menuWorkstock)
  await page.click(Acties.Acties.li_first_action)
  await expect(page.locator(Acties.Anonymous.div_anonymous)).toHaveText("This registration is completely anonymous. It is not registered who made this report.")
  await expect(page.locator(Acties.Anonymous.td_AnonymousActor)).toHaveText("Anonymous")
  await expect(page.locator(Acties.Anonymous.td_AnonymousUser)).toHaveText("Anonymous")

  await context.close()
});