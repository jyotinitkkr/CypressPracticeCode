/// <reference types = "Cypress" />

describe('Get API test', ()=>{
    let accessToken = '********'
    it('Get Users', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users',
            headers:{
                'authorization' : "Bearer"+accessToken
            }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })
    it('Get Users by ID test', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users',
            headers:{
            }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.data[0].name).to.eq('Chakravartee Gandhi')
        })
    })
    it('GET call', ()=>{

        // By default if method name is not mentioned in request call, it is considered as GET request.
        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res)=>{
        expect(res.body.product[0]).have.property('product','motorbike')
        })
    })
    it('GET users', ()=>{
        cy.request({
            method:'GET',
            url:'https://flask-rest-api-demo.herokuapp.com/users'
        }).then((res)=>{
            expect(res.status).equal(200),
            
            expect(res.body.users[0]).have.property('username')
            
        })
    })
})

