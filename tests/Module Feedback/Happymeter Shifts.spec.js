const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Happymeter, Dashboard } = require('../../objects')

test('Happymeter Shifts', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.click(Dashboard.homeHappyMeter)
  await expect(page.locator(Happymeter.h2_Happymeter)).toBeVisible()
  await page.click(Happymeter['span_Agullas Mengen Ochtend (AGU)'])
  await page.fill(Happymeter['input_Order nummer_ordernumber'], "JO12345")
  await page.click(Happymeter.button_Datum)
  await page.click(Happymeter.button_ok)
  await page.selectOption(Happymeter.select_Shift, "3")
  await page.click(Happymeter['a_Creativity is key_smiley veryhappy_gray'])
  await page.fill(Basics['Comment-Description'], "Dit gaat prima!")
  await page.click(Happymeter.button_Verzenden)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Happymeter['button_Nog een'])
  await page.click(Happymeter['a_Creativity is key_smiley veryhappy_gray'])
  await page.click(Happymeter.button_Verzenden)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Happymeter.button_Complimeter)
  await expect(page.locator(Happymeter.h2_Complimeter)).toBeVisible()



  await context.close()
});