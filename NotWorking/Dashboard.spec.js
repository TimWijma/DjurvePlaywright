const { test, expect } = require('@playwright/test');
const { Login } = require('../login');
const { Global, Dashboard } = require('../objects')

test('Dashboard', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")
  
  await page.click(Dashboard.homeHappyMeter)
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeComplimeter)
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeSafety)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeComplaint)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeTask)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeQuality)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeFailure)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeAnnouncement)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeIntervention)
  await expect(page.locator('#btnclosedetail .material-icons')).toHaveText(/^arrow_back*/)
  await page.click(Dashboard.buttonBackDetail)
  await page.click(Dashboard.homeAskFeedback)
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeMyTeams)
  await page.click(Dashboard.buttonBack)
  await page.click(Dashboard.homeMyGroups)
  await page.click(Dashboard.buttonBack)
  await context.close()
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))