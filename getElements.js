
describe('check element get concept', ()=>{

    it('element get testing', ()=>{

        cy.visit('https://www.freshworks.com/')
        cy.get('#onetrust-accept-btn-handler').click()

        //used real events for mouse hover actions, used documenentation to do the actions too.
        cy.contains('Company').realHover('mouse')
        //cy.wait(1000);
        cy.get(':nth-child(3) > .nav-label').trigger('mouseover')
        cy.contains('About').should('be.visible').click()

        cy.contains('About us').and('have.length', 1)
       
        cy.url().should('include','/company').and('include','/about')
         //cy.url().should('include','/about')

         /** checking the count of footer links on the page */
         cy.get('ul.footer-nav li').should('have.length', 23) 
         // two ways to find the href that contains footer, one way is chaining the path and other one is using FIND
          /** checking the count of href that contains footer word */

          cy.get("ul.footer-nav li a[href*='footer']").should('have.length',5)
         /** using FIND to check the count of href that contains footer word, find is mainly used to find something from the children routing through parent
          * basically parent is using get method and from their we are filtering out the children.
          * video time 17:17
          */
         cy.get("ul.footer-nav li").find("a[href*='footer']").should('have.length',5)
    
        })
        it.skip('Search in amazon about apple macbook', ()=>{

            cy.visit('https://www.amazon.in/')
            cy.get('.nav-search-field').within(()=>{
                cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop')
            })
        })

})

    
