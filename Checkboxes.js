describe('checkbox testing', ()=>{
    it.skip('checbox cheking test', ()=>{
        cy.visit('http://automationpractice.com/index.php')

        // first made sure that i clicked on the first element. because the classname was same for 4 elements, to pick the first one i used first method.
       // cy.get('.sf-with-ul').first().click()
       cy.contains('Women').click()
      /**  cy.get('.checker').check(), this method will not work becuase it works only on checkbox and radio class.
      check and verify them
      */
      cy.get('.checkbox').check().parent().should('have.class','checked') // need to use parent for assertion with should, because it cannot assert for multiple elements.
        //uncheck and verify them

        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
    })
    it.skip('checbox checking test on amazon', ()=>{
        cy.visit('http://www.amazon.com')

        // first made sure that i clicked on the first element. because the classname was same for 4 elements, to pick the first one i used first method.
       // cy.get('.sf-with-ul').first().click()
       cy.get('.nav-search-field').type('laptop')
       cy.get('#nav-search-submit-button').click()
      /**  checking all checboxes is not working on amamzon as the by checking it is getting detached from DOM.
      */

    //  cy.get('.a-checkbox [type="checkbox"]').check({force: true})
      //cy.get('.s-list-item > .a-list-item > .a-link-normal > .a-size-base').contains('Clear') // need to use parent for assertion with should, because it cannot assert for multiple elements.
        //uncheck and verify them

        //cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
    })
    
    it('checbox checking test on snapdeal', ()=>{
        cy.visit('http://www.snapdeal.com')
       cy.get('#inputValEnter').type('laptop')
       cy.get('.searchformButton').click()
      // cy.get('#nav-search-submit-button').click()
      /* we found checkbox css from cypress test runner and changed the child from 1 to n to 
      get the css for all the elements, but in the css last step was label, we have removed it 
      and used input in place of that, because it is going to input the check selection
      */
      cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force: true})
      cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked','checked')
      cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').uncheck({force: true})
      cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('not.have.checked','checked')
    })

})