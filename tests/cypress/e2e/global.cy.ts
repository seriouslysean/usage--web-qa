/// <reference types="cypress" />

// https://docs.cypress.io/api/commands
describe('Web QA Usage', () => {

  beforeEach(() => {
    // https://docs.cypress.io/api/commands/visit
    cy.visit('/')
  })

  it('should contain a title', () => {
    // https://docs.cypress.io/api/commands/get
    // https://docs.cypress.io/api/commands/should
    cy.get('h1')
      .should('have.length', 1)
      .should('include.text', 'Web QA Usage')
  })

  describe('Addition Button', () => {
    let addCard: Cypress.Chainable

    beforeEach(() => {
      addCard = cy.get('.card--add')
    })

    it('should contain a card', () => {
      addCard.should('have.length', 1)
    })

    it('should contain a title', () => {
      addCard
        .get('h2')
        .should('have.length', 1)
        .should('include.text', 'add on click')
        .should('include.text', '(0)')
    })

    it('should contain a paragraph', () => {
      addCard
        .get('p')
        .should('have.length', 1)
        .should('include.text', 'should start at 0 and stop at 10')
    })

    describe('Button', () => {
      let button: Cypress.Chainable

      beforeEach(() => {
        button = addCard.get('button')
      })

      it('should contain a button', () => {
        button
          .should('have.length', 1)
          .should('include.text', '0')
      })

      it('should increment count when button is clicked', () => {
        // One click
        button.click()
        button.should('include.text', '1')
      })

      it('should be disabled after 10 clicks', () => {
        // 10 clicks
        for (let i=0;i<10;i++) {
          button.click()
        }
        button.should('include.text', 'DISABLED')

        // 11 clicks
        button.click()
        button.should('include.text', 'DISABLED')
      })
    })

  })

  describe('Subtraction Button', () => {
    let subtractCard

    beforeEach(() => {
      subtractCard = cy.get('.card--subtract')
    })

    it('should contain a card', () => {
      subtractCard.should('have.length', 1)
    })

    it('should contain a title', () => {
      subtractCard
        .get('h2')
        .should('have.length', 1)
        .should('include.text', 'subtract on click')
        .should('include.text', '(10)')
    })

    it('should contain a paragraph', () => {
      subtractCard
        .get('p')
        .should('have.length', 1)
        .should('include.text', 'should start at 10 and stop at 0')
    })

    describe('Button', () => {
      let button

      beforeEach(() => {
        button = subtractCard.get('button')
      })

      it('should contain a button', () => {
        subtractCard
          .get('button')
          .should('have.length', 1)
          .should('include.text', '10')
      })

      it('should decrement count when button is clicked', () => {
        // One click
        button.click()
        button.should('include.text', '9')
      })

      it('should be disabled after 10 clicks', () => {
        // 10 clicks
        for (let i=0;i<10;i++) {
          button.click()
        }
        button.should('include.text', 'DISABLED')

        // 11 clicks
        button.click()
        button.should('include.text', 'DISABLED')
      })
    })

  })

})
