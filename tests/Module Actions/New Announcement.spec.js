const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Acties, Menu, Dashboard } = require('../../objects')

test('New Announcement', async ({ page, browser }) => {
//   page.on('dialog', dialog => dialog.accept());
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "tjitske@djurve.nl")

  await page.click(Dashboard.homeAnnouncement)
  await page.fill(Acties.inputName, "Grote update over 3 dagen")
  await page.fill(Basics['Comment-Description'], "Over drie dagen komt er een grote wijziging voor djurve.")
  await page.selectOption(Acties.selectReportingActor, "41ca13be-83bc-0031-8bd1-454f215dd1a3")
  await page.selectOption(Acties.selectShift, "1")
  await page.fill(Basics.inputOrderNumber, "123456")
  await page.click(Acties.buttonSave)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Acties.buttonBack)
  await page.click(Menu.menuWorkstock)
  await page.click(Acties.Acties.li_first_action)
  await page.click(Acties.buttonStartAction)
  await page.fill(Basics['Message-Description'], "Kun je deze oppakken?")
  await page.selectOption(Acties.selectActionActor, "41ca13be-83bc-0004-8bd1-454f215dd1a3")
  await page.click(Acties.buttonStartActionFromTask)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});