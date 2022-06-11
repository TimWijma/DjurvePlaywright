const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Shortcuts, Machines } = require('../../objects')

test('Machines', async ({ page, browser }) => {
  let code = (Math.random() + 1).toString(36).substring(2,6);
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "boris@djurve.nl")

  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Basics.a_Management)
  await page.click(Machines.a_codeMachines)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Machines.button_add)
  await page.fill(Machines.input_Name_txtname, "Machine " + code)
  await page.fill(Machines.textarea_Info_txtinfo, "This is a new machine")
  await page.fill(Machines.input_Code_txtcode, code)
  await page.fill(Machines.textarea_Wiki_txtwiki, "TESTING")
  await page.click(Machines.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Machines.a_codeMachines)
  await page.click(Basics.i_search)
  await page.click(Basics.input_search)
  await page.waitForTimeout(1000)
  await page.fill(Basics.input_search, "Machine " + code)
  await page.keyboard.press('Enter')
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await page.click(Machines.first_machine)
  await expect(page.locator("text=This is a new machine")).toBeVisible()

  await context.close()
});