const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Acties, Actors, Shortcuts, Defaults } = require('../../objects')

test('CompanyFlow', async ({ page, browser }) => {
  let code = (Math.random() + 1).toString(36).substring(2,12);
  let companyname = "Comp" + code

  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.click(Acties.Companies.Companies.div_Organisaties)
  await page.click(Acties.Companies.Companies.i_add)
  await page.fill(Acties.Companies.Companies['input_Company name_txtname'], companyname)
  await page.fill(Acties.Companies.Companies.textarea_Info_txtinfo, "AUTOTESTCOMPANY")
  await page.click("#EarlyAdopter")
  await page.click(Acties.Companies.Companies.button_opslaan)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await page.close()
  const contextTwo = await browser.newContext()
  const pageTwo = await contextTwo.newPage()

  pageTwo.on('dialog', async (dialog) => {
    expect(dialog.message()).toMatch(/ja/)
    await dialog.accept('ja')
  });

  await pageTwo.goto(Global.url)
  await Login(pageTwo, "tjitske@djurve.nl")

  await pageTwo.click(Acties.Companies.Companies.div_Organisaties)
  await pageTwo.click(Acties.Companies.Companies.i_search)
  await pageTwo.click(Defaults.div_Toastr)
  await pageTwo.fill(Acties.Companies.Companies.input_search_search, companyname)
  await pageTwo.keyboard.down('Enter');
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await pageTwo.click(Acties.Companies.Companies.span_ClickFirstCompany)
  await pageTwo.click(Acties.Companies.Companies['button_Join company'])
  await pageTwo.fill(Acties.Companies.Companies.textarea_Message_comment, "Ik wil graag aanhaken voor de test")
  await pageTwo.click(Acties.Companies.Companies.button_verzenden)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await pageTwo.click(Acties.Companies.Companies.button_company_switch)
  await pageTwo.click(`xpath=//li[(text() = "${companyname}" or . = "${companyname}")]`)
  await expect(pageTwo.locator('#title')).toHaveText("Home")

  await pageTwo.click(Acties.Companies.Companies.a_peopleTeams)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await pageTwo.click("#btnaddactor")
  await pageTwo.fill(Actors.input_txtname, "Team1")
  await pageTwo.fill(Actors.input_txtcode, (Math.random() + 1).toString(36).substring(2,5))
  await pageTwo.click(Acties.Companies.Companies.button_opslaan)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await pageTwo.click(Acties.Companies.Companies.a_peopleTeams)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await pageTwo.click("#btnaddactor")
  await pageTwo.fill(Actors.input_txtname, "Team2")
  await pageTwo.fill(Actors.input_txtcode, (Math.random() + 1).toString(36).substring(2,5))
  await pageTwo.click(Acties.Companies.Companies.button_opslaan)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await pageTwo.click(Acties.Companies.Companies['div_Co-teams (0)edit'])
  await pageTwo.click(Acties.Companies.Companies.i_edit)
  await pageTwo.click(Acties.Companies.Companies['span_Team1_mdl-checkbox__rippl'])
  await pageTwo.click(Acties.Companies.Companies.button_opslaan_1)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await pageTwo.reload()

  await pageTwo.click(Basics.a_homeHome)
  await pageTwo.click(Acties.Companies.Companies.a_starVerbeteren)
  await pageTwo.click(Acties.Companies.Companies.span_Team1)
  await pageTwo.click(Acties.Companies.Companies['a_star tmp_fs'])
  await pageTwo.fill(Basics['Comment-Description'], "Gaat goed!")
  await pageTwo.click(Acties.Companies.Companies.button_verzenden)
  await pageTwo.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await pageTwo.click(Shortcuts.ShortcutAccount)
  await pageTwo.click(Basics.a_Management)
  await pageTwo.click(Acties.Companies.Companies['a_settingsOrganisatie instelli'])
  await pageTwo.click(Acties.Companies.Companies.button_company_delete)
  await context.close()
  await contextTwo.close()

});