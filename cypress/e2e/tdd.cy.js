/// <reference types="Cypress" />

describe('Validate complex Data using Assert', () => {
    it('Dewscrobe', () => {
        cy.visit('www.google.com')
        //Asserting String
        let firstName = 'TestingFunda'
        assert.equal(firstName, 'TestingFunda')
        assert.include(firstName, 'Testing')
        assert.typeOf(firstName, 'string')
        assert.notTypeOf(firstName, 'Integer')

        //Asserting Object
        let person = {
            firstName: 'Testing',
            lastName: 'Funda'
        }
        assert.property(person, 'lastName')
        assert.isObject(person)
        assert.deepPropertyVal(person, 'lastName', 'Funda')

        //Asserting Array
        let employeeID = [1,2,3,4,5]
        assert.isArray(employeeID)
        assert.includeDeepMembers(employeeID, [2,3])
    })
})