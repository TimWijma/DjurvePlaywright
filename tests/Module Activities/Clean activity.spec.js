const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Activities } = require('../../objects')

test('Clean activity', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url + "&deeplink=registration&machinechecklistid=61ca13be-98bc-0002-8bd1-454f215dd1a3")

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.selectOption(Activities['Clean And Check']['select_-- Selecteer team --Agullas Mengen M_0bb3a5'], "41ca13be-83bc-0032-8bd1-454f215dd1a3")
  await page.selectOption(Activities['Clean And Check']['select_-- Selecteer een dienst --          _4baf65'], "1")
  await page.fill(Basics.inputOrderNumber, "JO12345")
  await page.click(Activities['Clean And Check'].ActivityCleanMachine_Klaar)
  await page.click(Activities['Clean And Check'].ActivityDeepCleanMachine_Skip)
  await page.fill(Basics['Comment-Description'], "Top! Mooi schoon")
  await page.click(Activities['Clean And Check'].button_Opslaan)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});