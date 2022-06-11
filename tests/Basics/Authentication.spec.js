const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Shortcuts } = require('../../objects')

test('Authentication', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")

  //Logout and enter email
  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Basics.li_Signout)
  await page.click(Basics['span_mdl-button__ripple-contai_1'])
  await page.fill(Basics.input_username, "eelze.wijma@gmail.com")
  await page.click(Basics['button_Send link'])
  await page.click(Basics['div_You are almost ready. An e'])
  await page.click(Basics['span_mdl-button__ripple-contai_2'])
  await page.fill(Basics.input_name, "Eelze")
  await page.fill(Basics.input_email, "eelze.wijma@gmail.com")
  await page.click(Basics['span_mdl-checkbox__ripple-cont'])
  await page.click(Basics['span_mdl-checkbox__ripple-cont_1'])
  await page.click(Basics.button_Register)
  await page.click(Basics['div_Sorry this username is alr'])
  await page.click(Basics['span_mdl-button__ripple-contai_3'])

  await context.close()
});