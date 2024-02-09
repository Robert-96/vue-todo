// https://docs.cypress.io/api/table-of-contents

describe('Vue ToDo Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the app root url', () => {
    cy.contains('h1', 'todos').should('be.visible');
  })

  it('Should have no todo items initially', () => {
    cy.get('#item-counter').should('contain', '0');
  })

  it('Should add a new todo item', () => {
    cy.get('#item-counter').should('contain', '0');
    cy.get('.new-todo').type('Buy bread 🍞{enter}');
    cy.get('#item-counter').should('contain', '1');
  })

  it('Should add multiple new todo items', () => {
    cy.get('.new-todo').type('Buy bread 🍞{enter}');
    cy.get('#item-counter').should('contain', '1');
    cy.get('.new-todo').type('Water plants 🎍{enter}');
    cy.get('#item-counter').should('contain', '2');
    cy.get('.new-todo').type('Dentist{enter}');
    cy.get('#item-counter').should('contain', '3');
  });

  it('Should mark a todo item as completed', () => {
    cy.get('.new-todo').type('Buy bread 🍞{enter}');
    cy.get('#item-counter').should('contain', '1');
    cy.get('.toggle').click();
    cy.get('#item-counter').should('contain', '0');
  });

  it('Should mark multiple todo items as completed', () => {
    cy.get('.new-todo').type('Buy bread 🍞{enter}');
    cy.get('#item-counter').should('contain', '1');
    cy.get('.new-todo').type('Water plants 🎍{enter}');
    cy.get('#item-counter').should('contain', '2');
    cy.get('.new-todo').type('Dentist{enter}');
    cy.get('#item-counter').should('contain', '3');

    cy.get('.toggle').eq(0).click()
    cy.get('#item-counter').should('contain', '2');

    cy.get('.toggle').eq(1).click()
    cy.get('#item-counter').should('contain', '1');

    cy.get('.toggle').eq(2).click()
    cy.get('#item-counter').should('contain', '0');
  })

  it('Should remove a todo item', () => {
    cy.get('.new-todo').type('Buy bread 🍞{enter}');
    cy.get('#item-counter').should('contain', '1');

    cy.get('.destroy').click({force: true})
    cy.get('#item-counter').should('contain', '0');
  })

  it('Should remove multiple todo items', () => {
    cy.get('.new-todo').type('Buy bread 🍞{enter}');
    cy.get('#item-counter').should('contain', '1');
    cy.get('.new-todo').type('Water plants 🎍{enter}');
    cy.get('#item-counter').should('contain', '2');
    cy.get('.new-todo').type('Dentist{enter}');
    cy.get('#item-counter').should('contain', '3');

    cy.get('.destroy').first().click({force: true})
    cy.get('#item-counter').should('contain', '2');

    cy.get('.destroy').first().click({force: true})
    cy.get('#item-counter').should('contain', '1');

    cy.get('.destroy').click({force: true})
    cy.get('#item-counter').should('contain', '0');
  })
})
