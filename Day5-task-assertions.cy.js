describe('Assertions', () => {
    it('Assertions - Postivecases', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include', 'HRM')
        cy.title().should('eq', 'OrangeHRM')
        cy.get("img[alt='company-branding']").should('be.visible').and('exist')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    });
    it('Explicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")        
        cy.get("button[type='submit']").click()
        let expName="Mary43103 Wolters";
        cy.get('.oxd-userdropdown-name').then ((x)=>{
            let actName=x.text()
            expect(actName).to.equal(expName)

        })
    });
});