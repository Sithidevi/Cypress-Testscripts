describe('Amazon website test suite', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.in/')

    });
    it('Sign up', () => {
        cy.get('#nav-link-accountList').click();
        cy.get('#createAccountSubmit').click();
        cy.get('#ap_customer_name').type('Devi');
        cy.get('#ap_phone_number').type('9965237976')
        cy.get('#ap_password').type('Testqa@123');
        cy.get('#continue').click();
    });

    it('Sign in', () => {
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type('9965237976');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('Devi@123');
        cy.get('#signInSubmit').click();

    });
    it('Search a Product', () => {
        //cy.get('#nav-link-accountList').click();
        //cy.get('#ap_email').type('9965237976');
        //cy.get('.a-button-inner > #continue').click();
        //cy.get('#ap_password').type('Devi@123');
        //cy.get('#signInSubmit').click();
        cy.get('#twotabsearchtextbox').type('Smart watch for woman')
        cy.get('#sac-suggestion-row-1').click();
        //cy.get('#nav-search-submit-button').type('Smart Watch');
        //cy.get('.a-truncate-cut').should('contain', 'Smart Watch for Women: Latest Tech, Elegant Design')
        //cy.get('#p_123\/214020 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').check();
        cy.wait(3000);
        //cy.get("li[id='p_123/214020']").click()
        cy.get('#brandsRefinements > :nth-child(2)').contains('boAt').click();
        cy.get('li[id="p_n_feature_eighteen_browse-bin\/27959622031"] > :nth-child(1)').contains('Rectangular').click();
        cy.get('li[id="p_n_pct-off-with-tax/2665399031"] > :nth-child(1)').contains('10% Off or more').click();

        


    });
});