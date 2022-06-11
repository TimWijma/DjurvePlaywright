const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Happymeter } = require('../../objects')

test('Happymeter', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.click(Happymeter.Happymeter['div_How do you feel'])
  await expect(page.locator(Happymeter.h2_Happymeter)).toBeVisible()
  await page.click(Happymeter.Happymeter['span_Tweetie Birds'])
  await page.click(Happymeter.Happymeter.star_very_satisfied)
  await page.click(Happymeter.Happymeter.star_satisfied)
  await page.click(Happymeter.Happymeter.star_neutral)
  await page.fill(Basics['Comment-Description'], "We are feeling great.")
  await page.click(Happymeter.Happymeter.button_Send)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Happymeter.Happymeter['button_Go to list'])



  await context.close()
});