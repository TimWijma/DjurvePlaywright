const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Acties, Menu } = require('../../objects')

test('New Critical Shift', async ({ page, browser }) => {
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "tjitske@djurve.nl")

  await page.click(Acties.Critical.div_Kritiek)
  await page.fill(Acties.inputName, "Er is plastic in het eten gekomen!")
  await page.fill(Basics['Comment-Description'], "Snel actie ondernemen")
  await page.selectOption(Acties.selectReportingActor, "41ca13be-83bc-0033-8bd1-454f215dd1a3")
  await page.fill(Basics.inputOrderNumber, "123456")
  await page.selectOption(Acties.selectShift, "2")
  await page.selectOption(Acties.selectLocation, "00000000-0000-0000-0000-000000000000")
  await page.click(Acties.buttonSave)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Acties.buttonBack)
  await page.click(Menu.menuWorkstock)
  await page.click(Acties.Acties.li_first_action)
  await page.click(Acties.buttonStartAction)
  await page.fill(Basics['Message-Description'], "Kun je deze oppakken?")
  await page.selectOption(Acties.selectActionActor, "41ca13be-83bc-0966-8bd1-454f215dd1a3")
  await page.click(Acties.buttonStartActionFromTask)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  
  await context.close()
});