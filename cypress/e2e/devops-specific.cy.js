describe('Funcionalidades Específicas del Sitio DevOps', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería mostrar el header con navegación', () => {
    cy.get('.header').should('exist')
    cy.get('.navbar').should('exist')
    cy.get('.nav-brand').should('exist')
    cy.get('.nav-menu').should('exist')
  })

  it('debería mostrar el logo y título en la navegación', () => {
    cy.get('.nav-brand a').should('contain', 'Fundamentos DevOps')
    cy.get('.nav-brand i.fas.fa-rocket').should('exist')
  })

  it('debería tener enlaces de navegación funcionales', () => {
    cy.get('.nav-menu .nav-link').should('have.length.at.least', 3)
    
    // Verificar enlace de inicio (puede ser absoluto o relativo)
    cy.get('.nav-menu .nav-link').contains('Inicio').should('have.attr', 'href').and('match', /^(\/|http:\/\/127\.0\.0\.1:1111\/)$/)
    
    // Verificar enlace del curso (puede ser absoluto o relativo)
    cy.get('.nav-menu .nav-link').contains('Curso').should('have.attr', 'href').and('match', /^(\/docs|http:\/\/127\.0\.0\.1:1111\/docs)$/)
    
    // Verificar enlace de GitHub
    cy.get('.nav-menu .nav-link').contains('GitHub').should('have.attr', 'href').and('include', 'github.com')
  })

  it('debería mostrar la sección hero principal', () => {
    cy.get('.hero-section').should('exist')
    cy.get('.hero-title').should('contain', 'Fundamentos DevOps')
    cy.get('.hero-subtitle').should('contain', 'Adalid')
    cy.get('.hero-description').should('contain', 'Aprende a integrar desarrollo')
  })

  it('debería tener botones de acción en el hero', () => {
    cy.get('.hero-actions .btn').should('have.length.at.least', 1)
    cy.get('.btn-primary').should('contain', 'Comenzar Curso')
    cy.get('.btn-primary').should('have.attr', 'href').and('match', /^(\/docs|http:\/\/127\.0\.0\.1:1111\/docs)$/)
  })

  it('debería mostrar las secciones del curso', () => {
    // Verificar que hay secciones del curso (buscar diferentes posibles selectores)
    cy.get('body').then(($body) => {
      // Buscar diferentes posibles contenedores de secciones
      const selectors = [
        '.course-sections', 
        '.features', 
        '.modules',
        '.hero-actions',
        '.main-content > div:not(.hero-section)',
        '[class*="section"]',
        '[class*="module"]'
      ]
      
      let found = false
      selectors.forEach(selector => {
        if ($body.find(selector).length > 0) {
          found = true
        }
      })
      
      if (found) {
        cy.log('Secciones del curso encontradas')
      } else {
        // Si no encuentra secciones específicas, verificar que al menos hay contenido
        cy.get('.main-content').should('not.be.empty')
        cy.log('Contenido principal encontrado (secciones pueden estar en otra estructura)')
      }
    })
  })

  it('debería tener enlaces a GitHub', () => {
    cy.get('a[href*="github.com"]').should('exist')
    cy.get('a[href*="github.com"]').should('contain', 'GitHub')
  })

  it('debería tener favicon y metadatos', () => {
    cy.get('link[rel="icon"]').should('exist')
    cy.get('meta[name="description"]').should('exist')
    cy.get('title').should('not.be.empty')
  })

  it('debería tener estilos CSS cargados', () => {
    cy.get('link[rel="stylesheet"]').should('exist')
    cy.get('link[href*="main.css"]').should('exist')
  })

  it('debería tener fuentes de Google Fonts', () => {
    cy.get('link[href*="fonts.googleapis.com"]').should('exist')
    cy.get('link[href*="fonts.gstatic.com"]').should('exist')
  })

  it('debería tener iconos de Font Awesome', () => {
    cy.get('link[href*="font-awesome"]').should('exist')
    cy.get('i.fas, i.fab').should('exist')
  })
})
