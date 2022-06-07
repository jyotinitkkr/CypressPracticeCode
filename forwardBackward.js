describe('Forward and backward action on UI', ()=>{

    it('forward action', ()=>{
        cy.visit('https://www.google.com')

        /** with repetitive use of cy */

        // cy.contains('Gmail').click()
        // cy.go(-1)
        // cy.wait(5000)
        // cy.go(1)

        /** with chainable use of cy */
        cy.contains('Gmail').click()
        cy.go(-1)
        .wait(5000)
        .go(1)
        .reload()
    })
})