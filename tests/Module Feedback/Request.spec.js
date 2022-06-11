const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Request } = require('../../objects')

test('Request', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.click(Basics.a_homeHome)
  await page.click(Request['a_starFeedback vragen'])
  await page.click(Request['div_Wil je je team vragen om de happymeter te gebruiken of een co-team vragen om feedback_mdl-card__title'])
  await page.selectOption(Request['Select Actor'], "41ca13be-83bc-0799-8bd1-454f215dd1a3")
  await page.fill(Basics['Comment-Description'], "Hoe is de koffie?")
  await page.click(Request['button_Maak verzoek'])
  await page.click(Request.div_Djurve)
  await page.click(Request['button_Verzend verzoek'])
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await page.click(Basics.a_homeHome)
  await page.click(Basics.a_homeHome)
  await page.click(Request['a_starFeedback vragen'])
  await page.click(Request['div_Wil je je team vragen om de happymeter te gebruiken of een co-team vragen om feedback_mdl-card__title'])
  await page.selectOption(Request['Select Actor'], "41ca13be-83bc-0799-8bd1-454f215dd1a3")
  await page.fill(Basics['Comment-Description'], "Hoe is de koffie?")
  await page.click(Request['button_Maak verzoek'])
  await page.click(Request.div_Share)
  await page.click(Request.button_kopieren)
  await page.click(Request['button_kopieer link'])
  await page.dblclick(Request.button_kopieren)
  await expect(page.locator("text=Tweetie Birds")).toBeVisible()
  await expect(page.locator("text=Tjitske Tester")).toBeVisible()

  await page.click(Basics.a_homeHome)
  await page.click(Request['a_starFeedback vragen'])
  await page.click(Request['div_Vraag teamleden_mdl-card__title'])
  await page.selectOption(Request['Select Actor'], "41ca13be-83bc-0799-8bd1-454f215dd1a3")
  await page.fill(Basics['Comment-Description'], "Demo")
  await page.click(Request['button_Maak verzoek'])
  await page.click(Request.div_Share)
  await page.click(Request.button_kopieren)
  await page.click(Request['button_kopieer link'])
  await page.click(Request.div_Djurve)
  await page.click(Request['span_- Boris Boss_mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center'])
  await page.click(Request['button_Verzend verzoek'])
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})


  await context.close()
});