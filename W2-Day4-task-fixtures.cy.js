describe('Fixture', () => {
    before(function() {
        cy.fixture('example').as("user")
         
        })
        

    it('Login', () => {

        cy.get("@user").then((user) => { 
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[placeholder='First Name']").type(user.first_name)
        cy.get("input[placeholder='Last Name']").type(user.last_name)
        cy.get("input[placeholder='Email Address']").type(user.email)
        cy.get("textarea[placeholder='Comments']").type(user.comments)
        cy.get("input[value='SUBMIT']").click();
        cy.get("div[id='contact_reply'] h1").should('contain', 'Thank You for your Message!')
        
    })
    
})
})
