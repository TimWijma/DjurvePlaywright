const { test } = require('@playwright/test');
const { Login } = require('../login');
const { Global, Signals } = require('../objects')

test('SignalCreation', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "boris@djurve.nl")

  await page.click(Signals.a_group_workGroups)
  await page.click(Signals.i_search)
  await page.fill(Signals.input_search_search, "Max")
  await page.keyboard.down('Enter');
  await page.click(Signals['span_Max -'])
  await page.click('#accordion_shifts')
  await page.click(Signals.i_add)
  await page.fill(Signals.input_Name_name, "New signal")
  await page.click(Signals.i_keyboard_arrow_down)
  await page.click(Signals.li_Other)
  await page.fill(Signals.input_Sequence_sequence, "10")
  await page.click(Signals['span_Enabled_mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center'])
  await page.click(Signals.button_Send)
  await page.click(Signals['span_more_vert_mdl-button__ripple-container'])
  await page.click(Signals.li_Delete)
  await page.click(Signals['span_more_vert_mdl-button__ripple-container'])

  // await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});