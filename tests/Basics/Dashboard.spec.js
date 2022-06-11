const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Dashboard, Basics } = require('../../objects')

test('Dashboard', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")
  
  await page.click(Dashboard.homeHappyMeter)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeComplimeter)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeSafety)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeComplaint)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeTask)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeQuality)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeFailure)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeAnnouncement)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeIntervention)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeAskFeedback)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeMyTeams)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeMyGroups)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.waitForTimeout(1000);
  await page.click(Dashboard.buttonBack)
  await context.close()
});