/// <reference types="Cypress" />

describe('Learn BDD Explicit Assertion', () => {
    it('Validate complex Data using expect', () => {
        cy.visit('www.google.com')

        //Simple String Verification
        let pageName = 'Google Homepage'
        expect(pageName).to.not.equal('Google')
        expect(pageName).to.be.equal('Google Homepage')
        expect(pageName).to.be.a('string')
        expect(pageName).to.have.length.of.most(15)

        //Validation Object
        let person = {
            firstName: 'Testing',
            lastName: 'Funda'
        }

        expect(person).to.deep.equal({
            firstName: 'Testing',
            lastName: 'Funda'
        })

        expect(person).to.have.property('firstName')
        

        //Validate Array
        let employeeID = [1,2,3,4,5]
        expect(employeeID).to.have.ordered.members([1,2,3,4,5])
        expect(employeeID).to.include(2)
    })
})