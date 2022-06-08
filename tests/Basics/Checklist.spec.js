const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Defaults, Checklist } = require('../../objects')

test('Checklist', async ({ page, browser }) => {
  const context = await browser.newContext()

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWYZ0123456789"
  let code = (Math.random() + 1).toString(36).substring(2,7);

  page.goto(Global.url)
  page.on('dialog', dialog => dialog.accept());

  // Login 
  await Login(page, "tjitske@djurve.nl")

  // Search checklist
  await page.click(Checklist.div_TT)
  await page.click(Checklist.li_Beheer)
  await page.click(Checklist.a_Controlelijsten)
  await page.click(Checklist.i_search)
  await page.click(Checklist.input_search_search)
  await page.fill(Checklist.input_search_search, "Standard Djurve HappyMeter")
  await page.keyboard.down('Enter');
  await page.click(Checklist.li_first_checklist)
  await page.click(Checklist['span_arrow_back_mdl-button__ripple-container'])

  // Create and delete new checklist
  await page.click(Checklist.i_add)
  await page.fill(Checklist.inputName, "new feedback list")
  await page.fill(Checklist.inputCode, code)
  await page.fill(Checklist.inputLabel, "Label" + code)
  await page.selectOption(Checklist.select_ComplimeterHappyMeter_0e130a, "2")
  await page.fill(Checklist.textarea_Info_txtinfo, "new info")
  await page.click(Checklist.button_Opslaan)
  await page.click(Defaults.div_Toastr)
  await page.click(Checklist['span_delete_mdl-button__ripple-container'])

  await context.close()
});