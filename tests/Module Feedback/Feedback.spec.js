const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Feedback } = require('../../objects')

test('Feedback', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "boris@djurve.nl")

  await page.click(Feedback.div_Complimeter)
  await expect(page.locator(Feedback.h2_Complimeter)).toBeVisible()
  await page.click(Feedback['span_Angels (ANG)'])
  await page.click(Feedback.ratingoption1)
  await page.click(Feedback.ratingoption2)
  await page.click(Feedback.ratingoption3)
  await page.fill(Basics['Comment-Description'], "Het gaat redelijk goed!")
  await page.click(Feedback.button_Verzenden)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});