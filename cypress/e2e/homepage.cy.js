describe('Página Principal - Fundamentos DevOps', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería cargar la página principal correctamente', () => {
    cy.checkPageLoaded()
    cy.checkTitle('Fundamentos DevOps')
  })

  it('debería mostrar el título principal', () => {
    cy.contains('Fundamentos DevOps Adalid').should('be.visible')
  })

  it('debería mostrar la descripción del curso', () => {
    cy.contains('Aprende a integrar desarrollo, operaciones y calidad').should('be.visible')
  })

  it('debería mostrar el botón "Comenzar Curso"', () => {
    cy.contains('Comenzar Curso').should('be.visible')
  })

  it('debería mostrar las secciones del curso', () => {
    // Verificar que hay contenido principal del curso
    cy.get('.main-content').should('exist')
    cy.get('.hero-section').should('exist')
    
    // Verificar que hay botón para acceder al curso
    cy.get('.btn-primary').should('contain', 'Comenzar Curso')
    
    // Verificar que hay enlace a la documentación
    cy.get('a[href*="/docs"]').should('exist')
  })

  it('debería mostrar información del repositorio', () => {
    // Verificar que hay enlaces a GitHub
    cy.get('a[href*="github.com"]').should('exist')
    cy.get('a[href*="github.com"]').should('contain', 'GitHub')
    
    // Verificar que hay enlace al repositorio específico
    cy.get('a[href*="Andres-Herbozo/devops-fundamentals"]').should('exist')
  })

  it('debería tener enlaces válidos', () => {
    cy.checkValidLinks()
  })
})
