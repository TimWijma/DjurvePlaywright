const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Defaults, Basics, Shortcuts } = require('../../objects')

test('Deeplinks', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url + '&deeplink=actor&companyid=41CA13BE-83BC-4444-8BD1-454F215DD1A4&actorid=41ca13be-83bc-0018-8bd1-454f215dd1a3')
  await Login(page, "tjitske@djurve.nl")
  await expect(page.locator(Basics.detail_title)).toHaveText(/Angels/)
  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Basics.li_Signout)

  page.goto(Global.url + '&deeplink=actor&companyid=41CA13BE-83BC-4444-8BD1-454F215DD1A4&actorid=41ca13be-83bc-0018-8bd1-454f215dd1a3')
  await Login(page, "tjitske@djurve.nl")
  await expect(page.locator(Basics.detail_title)).toHaveText(/Angels/)

  await context.close()
});