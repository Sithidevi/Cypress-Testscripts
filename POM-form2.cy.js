import RegForm from '../PageObjects/RegForm.cy'
describe('POM', function() {

    it('Registration Form', function () {
        const form = new RegForm()
        form.visit();
        form.fillFirstName('testfirst')
        form.fillLastName('testlast')
        form.check()
        form.select('MCR')
        form.fillUserName('usertest')
        form.fillPassword('test@123')
        form.fillConfirmPassword('test@123')
        form.fillEmail('test123@xyz.com')
        form.fillContactNo('(415)8265412')
        form.fillAdditionalInfo('testinfo')
        form.Submit()
        cy.get('#success_message').should('have.contain', "Success  Success!.")
        
    });
});