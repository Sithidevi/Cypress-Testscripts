/// <reference types="cypress" />
describe('Radio button verification', () => {
  it('verify user can select option from drop-downs', () => {
    cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#dropdowm-menu-1').select('python')
    cy.get('#dropdowm-menu-2').select('testng')
    cy.get('#dropdowm-menu-3').select('jquery')
});
    it('Verify user can select the radio button', () => {
      cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
      cy.get('#radio-buttons').find("input[type='radio']").first().check()
    });

      it('Verify user can check the checkbox', () => {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('#checkboxes > :nth-child(1) > input').check()
        
   });
  
   it('Verify user can uncheck the checkbox', () => {
    cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#checkboxes > :nth-child(5) > input').uncheck()

  });
  it('Verify user can check multiple checkboxes', () => {
    cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get("input[type='checkbox']").check('option-1', 'option-2', 'option-3','option-4').should('be.checked')
  
  });

 });

