const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Shortcuts, Acties } = require('../../objects')

test('CompanySettings', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "boris@djurve.nl")

  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Basics.a_Management)
  await page.click(Acties.Companies.CompanySettings['a_settingsCompany settings'])
  await page.click(Acties.Companies.CompanySettings['span_mdl-button__ripple-contai'])
  await page.click(Acties.Companies.CompanySettings['span_Module Feedback'])
  await page.click(Acties.Companies.CompanySettings['span_Module Feedback'])
  await page.click(Acties.Companies.CompanySettings['div_Module Feedback'])
  await page.click(Acties.Companies.CompanySettings['span_Show Rating'])
  await page.click(Acties.Companies.CompanySettings['span_Show Rating'])
  await page.click(Acties.Companies.CompanySettings['span_Early adopter'])
  await page.click(Acties.Companies.CompanySettings['span_Early adopter'])
  await page.click(Acties.Companies.CompanySettings.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});