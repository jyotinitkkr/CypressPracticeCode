describe('Handling dropdowns',()=>{

    it.skip('with select tag', ()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
       cy.get('.optanon-alert-box-button-middle > .optanon-allow-all').click()
       cy.get('#Form_submitForm_Country')
       .wait(5000)
       .select('India').should('have.value', 'India')
    })
    // selecting one item from the list of items displayed while searching in google. imp interview question
    it.skip('without select tag but using li',()=>{
        cy.visit('https://www.google.com')
        cy.get("[name='q']").type('cypress')
        //iframe was making this test fail, because it was not able to find cypress tree.
        cy.get('iframe').click()
       // find is used to find the one we want to click on from the parent cypress word.
        cy.get('.G43f7e').find('li span').contains('cypress tree').click({force: true})

    })

    it('different kind of dropdown used in e-commerce site', ()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')
        cy.get('.ac_results').find('li').contains('T-shirts').click()
    })
})