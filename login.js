const { Defaults } = require('./objects')


async function Login (page, username) {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.fill(Defaults.input_username, username)
    await page.fill(Defaults.input_password, 'jel2010')
    await page.click(Defaults.button_Login)
    // await page.click('.introjs-skipbutton') // DIV TOASTR??
    // await page.click(Defaults.div_Toastr)
}

module.exports = {
    Login
}