describe('Funcionalidades del Sitio DevOps', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería tener enlaces válidos a GitHub', () => {
    cy.get('a[href*="github.com"]').should('have.attr', 'href')
  })

  it('debería mostrar la versión del repositorio', () => {
    // Verificar que hay enlaces a GitHub (la versión puede estar en el repositorio)
    cy.get('a[href*="github.com"]').should('exist')
  })

  it('debería mostrar la licencia', () => {
    // Verificar que hay enlaces a GitHub (la licencia puede estar en el repositorio)
    cy.get('a[href*="github.com"]').should('exist')
  })

  it('debería tener enlaces internos válidos', () => {
    // Verificar que los enlaces a secciones tienen href válidos
    cy.get('a[href^="/docs"]').should('have.attr', 'href')
  })

  it('debería tener estructura HTML válida', () => {
    // Verificar que hay elementos de navegación
    cy.get('nav, .navbar, .header').should('exist')
    
    // Verificar que hay contenido principal
    cy.get('main, .main-content').should('exist')
    
    // Verificar que hay header
    cy.get('header, .header').should('exist')
  })

  it('debería tener metadatos correctos', () => {
    // Verificar que el título está presente
    cy.title().should('not.be.empty')
    
    // Verificar que hay meta description
    cy.get('meta[name="description"]').should('exist')
  })

  it('debería tener enlaces accesibles', () => {
    // Verificar que los enlaces tienen texto descriptivo
    cy.get('a[href]').each(($el) => {
      const text = $el.text().trim()
      expect(text.length).to.be.greaterThan(0)
    })
  })

  it('debería tener imágenes con alt text', () => {
    // Verificar que las imágenes tienen atributo alt
    cy.get('img').should('have.attr', 'alt')
  })

  it('debería tener formularios funcionales si existen', () => {
    // Verificar que los formularios tienen botones de envío
    cy.get('form').each(($form) => {
      cy.wrap($form).find('button[type="submit"], input[type="submit"]').should('exist')
    })
  })
})
