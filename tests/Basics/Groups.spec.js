const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Defaults, Groups, Basics } = require('../../objects')

test('Groups', async ({ page, browser }) => {
  const context = await browser.newContext()
  page.on('dialog', dialog => dialog.accept());


  page.goto(Global.url)

  await Login(page, "tjitske@djurve.nl")

  // Search Group
  await page.click(Groups.a_group_workGroups)
  await page.click(Groups.i_search)
  await page.fill(Groups.input_search, "Dev")
  await page.keyboard.down('Enter');
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Groups['span_Dev Group'])
  await expect(page.locator(Defaults.Title)).toHaveText("Dev")
  await page.click(Groups['span_mdl-button__ripple-contai'])

  // Add Group
  await page.click(Groups.button_add)
  await page.fill(Groups.input_txtname, "New group")
  await page.fill(Groups.textarea_txtinfo, "New info")
  await page.click(Groups.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  // Edit group
  await expect(page.locator(Defaults.Title)).toHaveText("New group")
  // await page.click(Defaults.div_Toastr)
  await page.click(Groups['span_mdl-button__ripple-contai_1'])
  await page.fill(Groups.input_txtname, "New group - edit")
  await page.click(Groups.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await expect(page.locator(Defaults.Title)).toHaveText("New group - edit")
  // await page.click(Defaults.div_Toastr)
  await page.click(Groups['span_mdl-button__ripple-contai_2'])

  await context.close()
});