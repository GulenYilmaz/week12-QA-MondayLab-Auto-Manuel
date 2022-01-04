const { Builder, Capabilities, By } = require("selenium-webdriver") 

const chromedriver= require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() =>{
    await driver.get('https://helo.devmountain.com/#/')
})
// afterAll(async() => {
//     await driver.quit()
// })

describe("Helo-Working in a Team", ()=>{
    it("Click on the Username input field and write the username", async()=>{
        let userNameField= await driver.findElement(By.css(('div[class="auth-input-box"]')[1]))
        await userNameField.sendKeys("NewUserForAutomationTestingByGulen")
        await driver.sleep(2000)



        let passwordField= await driver.findElement(By.css(('div[class="auth-input-box"]')[2]))
        await passwordField.sendKeys("NewUserForAutomationTestingByGulen")
        await driver.sleep(2000)




        let registerButton = await deriver.findElement(By.xpath('//button[text()=" Register "]'))
        await registerButton.click()


        let verifyUsername= await driver.findElement(By.xpath('//div[@class=" nav-profile-container "]/div/p'))
        let verifyUsernameText =await verifyUsername.getText()

        expect(verifyUsernameText).toContain("NewUserForAutomationTestingByGulen")



    })



})