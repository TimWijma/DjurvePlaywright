const { test, expect } = require('@playwright/test');
const { Login } = require('../login');
const { Global, Basics, Acties, Dashboard, Defaults, Menu } = require('../objects')

test('ChangeAction', async ({ page, browser }) => {
  page.on('dialog', dialog => dialog.accept());
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "leo@djurve.nl")

  await page.click(Dashboard.homeComplaint)
  await page.fill(Acties.inputName, "De koffie valt wat tegen")
  await page.fill(Basics['Comment-Description'], "De koffie voelt als slootwater. Aan het eind van de dag heb ik wel wat beters nodig. Ik heb al medelijden met de mensen die in de nacht werken.")
  await page.selectOption(Acties.selectReportingActor, "41ca13be-83bc-0799-8bd1-454f215dd1a3")
  await page.click(Acties.ActionFlow['a_Ben je daar blij mee_smiley veryhappy_gray veryhappy'])
  await page.fill(Acties.ActionFlow['textarea_Kun je daar meer over vertellen_textarea55ca13be-83bc-0086-8bd1-454f215dd1a3'], "")
  await page.click(Acties.FieldTest['a_Gaan we door_light red_gray'])
  await page.fill(Acties.ChangeActionAndVerySave['input_Waarom wel of niet_text55ca13be-83bc-_1614b0'], "Koffie moet beter")
  await page.click(Acties.buttonSave)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.fill(Acties.ActionFlow['textarea_Kun je daar meer over vertellen_textarea55ca13be-83bc-0086-8bd1-454f215dd1a3'], "De smaak is als asfalt en de kleur is troebel.")  
  await page.selectOption(Acties.selectLocation, "00000000-0000-0000-0000-000000000000")
  await page.click(Acties.buttonSave)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Menu.menuWorkstock)
  await page.click(Acties.Acties.li_first_action)
  await page.click(Acties.buttonStartAction)
  await page.fill(Basics['Message-Description'], "Kun je deze oppakken?")
  await page.selectOption(Acties.selectActionActor, "41ca13be-83bc-0018-8bd1-454f215dd1a3")
  await page.selectOption(Acties.selectActionUser, "51da13be-83bc-494a-8bd1-454f215dd1a8")
  await page.click(Acties.buttonStartActionFromTask)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Acties.ChangeActionAndVerySave.div_LL)
  await page.click(Acties.ChangeActionAndVerySave['li_Sign off'])

  await Login(page, 'hendrik@djurve.nl')

  await page.click(Acties.ChangeActionAndVerySave.div_assignment)
  await page.waitForTimeout(1000)

  // await page.selectOption(Acties.selectFilterActies, "4")
  await page.click(Acties.Acties.li_first_action)
  await page.click(Acties.ChangeActionAndVerySave['button_Voor mij'])
  await page.click(Acties.ChangeActionAndVerySave.button_Edit)
  await page.fill(Basics['Comment-Description'], "De koffie voelt als slootwater. Aan het eind van de dag heb ik wel wat beters nodig. Ik heb al medelijden met de mensen die in de nacht werken. Ik ben het er wel mee eens.")
  await page.click(Acties.ChangeActionAndVerySave.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Acties.ChangeActionAndVerySave.div_assignment)
  await page.click(Acties.Acties.li_first_action)



  await context.close()
});