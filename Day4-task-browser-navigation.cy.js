
describe('Browser navigationtest', () => {
    it('navigation test', () => {
        
        cy.visit("https://automationteststore.com/")
        cy.url().should('eq', "https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=43']").click();
        cy.get('.maintext').should('have.text', "Skincare")
        cy.go('back')
        cy.reload()
        cy.url().should('eq', "https://automationteststore.com/")
        cy.go('forward')
        cy.get('.maintext').should('have.text', "Skincare")

    });
})