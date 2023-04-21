describe('To-Do App', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/#/')
  })
  it('displays the correct number of items left to complete', () => {
    cy.get('.new-todo').type('Test item 1{enter}')
    cy.get('.new-todo').type('Test item 2{enter}')
    cy.get('.new-todo').type('Test item 3{enter}')
    cy.get('.todo-count').should('contain', '3 items left')
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.get('.todo-count').should('contain', '2 items left')
  })
  it('retains the state of the todo list after page reload', () => {
    cy.get('.new-todo').type('Test item 1{enter}')
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.reload()
    cy.get('.todo-list li').eq(0).should('have.class', 'completed')
  })
  it('can mark a todo item as completed', () => {
    cy.get('.new-todo').type('Test completed todo item{enter}')
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.get('.todo-list li').eq(0).should('have.class', 'completed')
  })

  it('can mark all todo items as completed', () => {
    cy.get('.new-todo').type('Test mark all todo items{enter}')
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.get('.toggle-all').check()
    cy.get('.todo-list li').eq(0).should('have.class', 'completed')
  })
})