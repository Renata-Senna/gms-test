/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata7@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')


  })
})
