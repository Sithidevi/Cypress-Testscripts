describe('fixture form 2', () => {

    before(function() {
        cy.fixture('userDetails1').then((data) => {
            this.data = data
        });
    });
    it('Registration Form', function ()
     {
        cy.visit('https://mytestingthoughts.com/Sample/home.html')
        cy.get("input[placeholder='First Name']").type(this.data.first_name)
        cy.get("input[placeholder='Last Name']").type(this.data.last_name)
        cy.get("#inlineRadioFemale").check()
        cy.get("[name^='department']").select('Department of Engineering')
        cy.get("input[placeholder='Username']").type(this.data.user_name)
        cy.get("input[placeholder='Password']").type(this.data.password)
        cy.get("input[placeholder='Confirm Password']").type(this.data.confirm_password)
        cy.get("input[name='email']").type(this.data.email)
        cy.get("input[name='contact_no']").type(this.data.contact_no)
        cy.get("textarea[id=exampleFormControlTextarea1]").type(this.data.additional_info)
        cy.get("button[type=submit]").click()
        cy.get('#success_message').should('have.contain', 'Success')    
        

    });
});