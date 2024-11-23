describe('Custom Commands', () => {
    
    it('login with valid data', () => {
        cy.Login('Admin', 'admin123')  
        cy.title().should('eq', 'OrangeHRM')


    })
    
    it('login with invalid data', () => {

        cy.Login('Admin', 'admin12345') 
        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').contains ('Invalid credentials')
            
        });
      
  
    });