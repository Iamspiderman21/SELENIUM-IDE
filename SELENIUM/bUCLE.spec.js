// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('BUCLE', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('BUCLE', async function() {
    await driver.get("https://www.saucedemo.com/")
    await driver.manage().window().setRect({ width: 974, height: 1032 })
    vars["usuarios"] = await driver.executeScript("return [{name: \"spider\", password: \"spider2002\"},                    {name: \"luis miguel\", password: \"secret_sauce\"},                   {name: \"alexis vega\", password: \"no hay contraseña\"},                   {name: \"shai\", password: \"3516637\"},                   {name: \"standard_user\", password: \"secret_sauce\"},                  ]")
    const collection = vars["usuarios"]
    for (let i = 0; i < collection.length - 1; i++) {
      vars["usuario"] = vars["usuarios"][i]
      await driver.findElement(By.css("*[data-test=\"username\"]")).click()
      await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys(" ${usuario.name}")
      await driver.findElement(By.css("*[data-test=\"password\"]")).click()
      await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("${usuario.password}")
      await driver.findElement(By.css("*[data-test=\"login-button\"]")).click()
    }
  })
})
