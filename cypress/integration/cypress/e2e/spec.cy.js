describe('Teste de interface do Grupo Medcof', () => {
  // Executa antes de cada teste no bloco
  beforeEach(() => {
    // Visita a página inicial e navega para a seção de cursos
    cy.visit('https://www.grupomedcof.com.br/home/');
    cy.get('a[href*="#cursos-section"]').should('be.visible').click();
    cy.url().should('include', '/home/#cursos-section');
  });

  it('Navegação até a seção de cursos', () => {
    cy.url().should('include', '/home/#cursos-section');
  });

  it('Seleção de um curso específico', () => {
    cy.contains('HIIT R1').should('be.visible').click();
  });
});



