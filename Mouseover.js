describe('mouseover action on sign-up', ()=>{

    it.skip('mouseover invoke action',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Add to cart').first().click()
        cy.get('.cross').click()
       // cy.get('.shopping_cart').invoke('show')
       // if with moveover trigger action doesnt work, we can use invoke to show the screen, sometimes it is hidden.
       cy.get('.shopping_cart').click()
        cy.contains('Check out').click({force: true})
        cy.contains('Summary')
    })
    it('mouseover invoke action on twolabs website',()=>{
        cy.visit('https://twolabs.com/')
        cy.contains('REGISTER').click()
        cy.get('.title').contains('Register')
        // cy.get('.fusion-icon').click().wait(500)
        // cy.get('.fusion-main-menu').invoke('show').find('li span').contains('Services').wait(500).click()
        // //if using url and contains together it is not working, it hsould have, should, include to do the assertion
        // cy.url().should('include','/services')
        
    })



})