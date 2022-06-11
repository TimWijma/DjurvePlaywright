const { test, expect } = require('@playwright/test');
const { Login } = require('../../login');
const { Global, Menu, Shortcuts, Basics, Acties } = require('../../objects')

test('Menu', async ({ page, browser }) => {
  const context = await browser.newContext()

  page.goto(Global.url)

  await Login(page, "boris@djurve.nl")

  await page.click(Menu.menuHome)
  await page.click(Menu.menuRegistration)
  await page.click(Menu.menuWorkstock)
  await page.click(Menu.menuActors)
  await page.click(Menu.menuGroups)
  await page.click(Menu.menuNetwerk)
  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Basics.a_Management)
  await page.click(Acties.Companies.CompanySettings['a_settingsCompany settings'])
  await page.click(Menu.menuTitle)
  await page.click(Menu.menuHome)
  await page.click(Shortcuts.ShortcutAssignent)
  await page.click(Shortcuts.ShortcutNotifications)
  await page.click(Shortcuts.ShortcutAccount)
  await page.click(Shortcuts.ShortcutSettings)

  await context.close()
});