describe('Drag and drop test', () => {
    it('Drag and drop test', () => {
      cy.visit('https://webdriveruniversity.com/Actions/index.html')
      cy.get('#draggable').trigger('mousedown', {which: 1})
      cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true})
    
    });
    it('Double click test', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick();
       
      
      });
});