const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Acties, Dashboard } = require('../../objects')

test('New Complaint', async ({ page, browser }) => {
  const context = await browser.newContext()
  await page.goto(Global.url)

  await Login(page, "tjitske@djurve.nl")

  await page.click(Dashboard.homeComplaint)
  await page.fill(Acties.inputName, "De koffie is echt niet te drinken")
  await page.fill(Basics['Comment-Description'], "Dit is echt niet oke")
  await page.selectOption(Acties.selectReportingActor, "41ca13be-83bc-0526-8bd1-454f215dd1a3")
  await page.click(Acties.FieldTest['a_Gaan we door_light red_gray'])
  await page.fill(Acties.Complaint['input_Waarom wel of niet_text55ca13be-83bc-_1614b0'], "We hebben drinken nodig")
  await page.click(Acties.Complaint['a_Ben je daar blij mee_smiley veryhappy_gray veryhappy'])
  await page.fill(Acties.Complaint.textarea_Beschrijving_comment, "De koffie is super!")
  await page.selectOption(Acties.selectLocation, "00000000-0000-0000-0000-000000000000")
  await page.click(Acties.buttonSaveAndAction)
  await page.fill(Basics['Message-Description'], "Kun je deze oppakken?")
  await page.selectOption(Acties.selectActionActor, "41ca13be-83bc-0018-8bd1-454f215dd1a3")
  await page.selectOption(Acties.selectActionUser, "51da13be-83bc-494a-8bd1-454f215dd1a8")
  await page.click(Acties.buttonStartActionFromTask)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});