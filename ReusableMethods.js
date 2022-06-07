describe('Reusable methods', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.loginToAutomationWebsite('klmn@gmail.com','klmnop')// name of commnads file resuable method name
    })

    it('should login method', ()=>{
        
        // cy.get('.login').click()
        cy.url().should('include', 'controller=my-account')
        // cy.get(':nth-child(n) > .myaccount-link-list > :nth-child(n) > a').should('have.length', 5) better way is written below
        cy.get('.myaccount-link-list a').should('have.length', 5)

        /*cy.contains('Home').click() or another way in code was to click on last element, 
        because it found two same css path elements, to click on the second one, 
        we chose.last() method. we are also asserting that we have reached the home page.
        */
       cy.get('.icon-chevron-left').last().click().url().should('include', 'index.php')
      // cy.Search('dress {enter}')
      cy.Search('dress')
    //    cy.get('#search_query_top').type('dress {enter}')
    //    cy.get('.page-heading').contains('dress')
    })
})