const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Dashboard, Basics, Smartphone, Defaults } = require('../../objects');

test('Smartphone', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url + "&view=2")

  // Login 
  await Login(page, "tjitske@djurve.nl")
  await page.setViewportSize({ width: 400, height: 800 });
  await page.click(Defaults.div_Toastr)

  
  await page.click(Dashboard.homeHappyMeter)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Happymeter)).toBeVisible()
  await page.click(Smartphone.span_Happymeter)
  await page.click(Dashboard.homeComplimeter)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Feedback)).toBeVisible()
  await page.click(Smartphone.span_Feedback)
  await page.click(Dashboard.homeSafety)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Veiligheid)).toBeVisible()
  await page.click(Smartphone.span_Veiligheid)
  await page.click(Dashboard.homeComplaint)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Klacht)).toBeVisible()
  await page.click(Smartphone.span_Klacht)
  await page.click(Dashboard.homeTask)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_interventiontasktitle)).toBeVisible()
  await page.click(Smartphone.span_interventiontasktitle)
  await page.click(Dashboard.homeQuality)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Kwaliteit)).toBeVisible()
  await page.click(Smartphone.span_Kwaliteit)
  await page.click(Dashboard.homeFailure)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Storing)).toBeVisible()
  await page.click(Smartphone.span_Storing)
  await page.click(Dashboard.homeAnnouncement)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Aankondiging)).toBeVisible()
  await page.click(Smartphone.span_Aankondiging)
  await page.click(Dashboard.homeIntervention)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone.span_Interventie)).toBeVisible()
  await page.click(Smartphone.span_Interventie)
  await page.click(Dashboard.homeAskFeedback)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000)
  await expect(page.locator(Smartphone['span_Feedback vragen'])).toBeVisible()
  await page.click(Smartphone['span_Feedback vragen'])

  await context.close()
});