import CreateAccount from '../PageObjects/CreateAccount.cy'
describe('PageObjectModel', function() {
    it('Create a Rediffmail account', function () {
        
        const acc= new CreateAccount()
        acc.visit();
        acc.fillFullName('xyz')
        acc.fillChooseRediffmailID('test')
        acc.clickButton()
        cy.get("div[id='check_availability'] b:nth-child(1)").should('contain', "Sorry, the ID that you are looking for is taken.")
        acc.fillChooseRediffmailID('pomedtest')
        acc.clickButton()
        cy.get("div[id='check_availability'] b:nth-child(1)").should('contain', "Yippie! The ID you've chosen is available.")
        acc.fillPassword('Testxyz@123')
        acc.fillRetypePassword('Testxyz@123')
        acc.fillAlternateEmailAddress('testxyz@gmail.com')
        acc.fillMobileNo('1234567890')
        acc.selectDate('22')
        acc.selectMonth('02')
        acc.selectYear('1995')
        acc.CheckGender()
        acc.selectCountry('India')
        acc.selectCity('Agra')
        acc.enterText('SDFE') //invalid captcha
        acc.submit()
        cy.get("body > center:nth-child(3) > form:nth-child(1) > div:nth-child(1) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > font:nth-child(1) > b:nth-child(1)")
        .should('be.visible').should('contain', "The code you've entered does not match with the code in the image")
    });
});