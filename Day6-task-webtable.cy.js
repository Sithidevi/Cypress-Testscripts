describe('Handling table', () => {
    beforeEach('Login', () => {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
    
    });
    it('check no.of rows and columns in the table', () => {
        cy.get("table[class='table table-light traversal-table']>tbody>tr").should('have.length', '3')
        cy.get("table[class='table table-light traversal-table']>thead>tr>th").should('have.length', '3')
});
it('Check the data from specific row and column', () => {
    cy.get("table[class='table table-light traversal-table']>tbody>tr:nth-child(2)>td:nth-child(2)").contains('Jacob')

});
    it('Read all rows & columns data in table', () => {
        cy.get("table[class='table table-light traversal-table']>tbody>tr").each(($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                });
            });
        });
    });
});