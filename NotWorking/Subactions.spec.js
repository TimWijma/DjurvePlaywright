const { test, expect} = require('@playwright/test');
const { Login } = require('../login');
const { Global, Basics, Acties } = require('../objects')

test('Subactions', async ({ page, browser }) => {
  page.on('dialog', dialog => dialog.accept());
  let randomname = (Math.random() + 1).toString(36).substring(2,12)

  const context = await browser.newContext()

  await page.goto(Global.url)
  await Login(page, "tjitske@djurve.nl")

  await page.click(Acties.Buttons.a_listRegistraties)
  await page.locator(Acties.Buttons.button_add).hover()
  await page.click(Acties.Subactions['button_Complaint 2'])
  await page.fill(Acties.Subactions.input_Titel_name, "Dit is de hoofdregistratie " + randomname)
  await page.fill(Basics['Comment-Description'], "De hoofdregistratie waaronder de subregistraties toegevoegd worden.")
  await page.selectOption(Acties.Subactions['select_-- Selecteer team of player --Alien _db9ad7'], "41ca13be-83bc-0004-8bd1-454f215dd1a3")
  
  await page.locator(Acties.Buttons.button_add).hover()
  await page.click(Acties.Subactions.button_Disturbance)
  await expect(page.locator("text=Subregistratie van type Disturbance")).toBeVisible()
  await page.fill(Acties.Subactions.input_Titel_name, "Dit is de subregistratie " + randomname)
  await page.fill(Basics['Comment-Description'], "Dit is normaal lange tekst")
  await page.selectOption(Acties.Subactions['select_-- Selecteer team of player --Alien _db9ad7'], "41ca13be-83bc-0004-8bd1-454f215dd1a3")
  await page.click(Acties.Subactions['button_Opslaan   terug'])
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await expect(page.locator(Acties.Subactions.input_Titel_name)).toHaveAttribute("value", "Dit is de hoofdregistratie " + randomname)
  await expect(page.locator("text=De hoofdregistratie waaronder de subregistraties toegevoegd worden.")).toBeVisible()
  await expect(page.locator("text=Subregistraties (1)")).toBeVisible()

  await context.close()
});