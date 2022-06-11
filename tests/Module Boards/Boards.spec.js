const { test } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Basics, Boards, Happymeter } = require('../../objects')

test('Boards', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url + "&view=3")

  // Login 
  await Login(page, "tjitske@djurve.nl")

  await page.click(Boards.actorAgullasMengenOchtend)
  await page.selectOption(Happymeter.select_Shift, "1")
  await page.click(Boards.img_Planning_signal)
  await page.waitForLoadState('networkidle')
  await page.click(Boards.img_Planning_signal)
  await page.click(Boards.button_Happymeter)
  await page.click(Boards['a_Creativity is key_smiley veryhappy_gray'])
  await page.fill(Basics['Comment-Description'], "Ja hoor.")
  await page.click(Boards.button_Save)
  await page.waitForLoadState('networkidle')
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.click(Boards.button_Complimeter)
  await page.click(Boards['span_Angels (ANG)'])
  await page.waitForLoadState('networkidle')
  await page.click(Boards['a_The work they deliver is from a high qual_16ca11'])
  await page.fill(Basics['Comment-Description'], "Top")
  await page.click(Boards.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  await context.close()
});