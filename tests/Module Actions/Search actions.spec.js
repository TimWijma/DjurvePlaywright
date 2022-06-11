const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Acties } = require('../../objects')

test('Search actions', async ({ page, browser }) => {
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "tjitske@djurve.nl")

  await page.click(Acties.Search.div_assignment)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.selectOption(Acties.selectFilterActies, "3")
  await page.selectOption(Acties.selectFilterActies, "0")
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.selectOption(Acties.Search['select_-- Alles --                Gestart  _b659bf'], "bea368e0-7b71-43fb-0002-186e12e5c29e")
  await page.selectOption(Acties.Search['select_-- Alles --                Gestart  _b659bf'], "00000000-0000-0000-0000-000000000000")
  await page.selectOption(Acties.Search['select_-- Alles --AgullasAgullas Mengen Mid_8da6b0'], "41ca13be-83bc-0004-8bd1-454f215dd1a3")
  await page.selectOption(Acties.Search['select_-- Alles --AgullasAgullas Mengen Mid_8da6b0'], "00000000-0000-0000-0000-000000000000")
  await page.selectOption(Acties.Search['select_-- Alles --Agullas0 AngelsAngelsAgul_3c74f1'], "41ca13be-83bc-0526-8bd1-454f215dd1a3")
  await page.selectOption(Acties.Search['select_-- Alles --Agullas0 AngelsAngelsAgul_3c74f1'], "00000000-0000-0000-0000-000000000000")

  await context.close()
});