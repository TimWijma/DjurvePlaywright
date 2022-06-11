const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Defaults, Actors, Basics } = require('../../objects')

test('Actors', async ({ page, browser }) => {
  const context = await browser.newContext()

  let actorcode = (Math.random() + 1).toString(36).substring(2,5);

  await page.goto(Global.url);
  page.on('dialog', dialog => dialog.accept());
  
  // Login
  await Login(page, "tjitske@djurve.nl")

  // Search actor
  await page.click(Actors.a_peopleActors)
  await page.click(Actors.i_search)
  await page.fill(Actors.input_search, 'Tweetie')
  await page.keyboard.down('Enter');
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})
  await page.locator(Actors['span_Tweetie Birds']).click()

  // Add actor
  await expect(page.locator(Defaults.Title)).toHaveText(/^Tweetie Birds.*/)
  await page.click(Actors.ripple_container_close)
  await page.click(Actors.i_add)
  await page.fill(Actors.input_txtname, 'New actor')
  await page.fill(Actors.input_txtcode, actorcode)
  await page.fill(Actors.textarea_txtinfo, "New info")
  await page.fill(Actors.textarea_txtgoals, "New goals")
  await page.click(Actors.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  // Edit actor
  expect(page.locator(Defaults.div_Toastr))
  await expect(page.locator(Defaults.Title)).toHaveText(/^New actor.*/)
  await page.click(Defaults.div_Toastr)
  await page.click(Actors.ripple_container_edit)
  await page.fill(Actors.input_txtname, "New actor edit")
  await page.click(Actors.button_Save)
  await page.locator(Basics.ProgressBar).first().waitFor({state: 'hidden'})

  // Delete actor
  expect(page.locator(Defaults.div_Toastr))
  await expect(page.locator(Defaults.Title)).toHaveText(/^New actor edit.*/)
  await page.click(Defaults.div_Toastr)
  await page.click(Actors.ripple_container_delete)

  await context.close()
});