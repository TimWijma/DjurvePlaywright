const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Security } = require('../../objects')

test('Machines', async ({ page, browser }) => {
  page.on('dialog', async() => {
    await page.click('text=ditzounietmoetenwerken')
  });

  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.click(Security['div_Mijn teams en players'])
  await page.click(Security['span_Tweetie Birds (TWE)'])
  await page.click(Security['span_edit_mdl-button__ripple-container'])
  await page.fill(Security.info, '\<a onmouseover="alert(document.cookie)"\>xxs link\</a\>')
  await page.click(Security.button_Opslaan)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await expect(page.locator(Security['a_xxs link'])).toBeHidden()
  await page.fill(Security.info, "")
  await page.waitForLoadState('networkidle')
  await page.fill(Security.wiki, '\<a onmouseover="alert(document.cookie)"\>xxs link\</a\>')
  await page.click(Security.button_Opslaan)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Security['a_xxs link'])
  await page.click(Basics.account)

  await context.close()
});