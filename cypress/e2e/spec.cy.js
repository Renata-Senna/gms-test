/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata10@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

it('Deve validar mensagem de erro com o campo inválido' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('123563')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata9@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')

})

it('Deve validar mensagem de erro do campo email' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata9test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')

})

it('Deve validar mensagem de erro do sobrenome' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('1253666')
    cy.get('#signup-email').type('renata10@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  
})

it('Deve validar mensagem de erro de senha fraca' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata12@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')

  })

it('Deve validar mensagem de erro de senha vazia' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata12@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'O campo de senha não pode estar vazio')
  
})

})


