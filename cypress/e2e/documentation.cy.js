describe('Documentación del Sitio DevOps', () => {
  beforeEach(() => {
    cy.visit('/docs')
  })

  it('debería cargar la página de documentación', () => {
    cy.checkPageLoaded()
    cy.url().should('include', '/docs')
  })

  it('debería mostrar la navegación de documentación', () => {
    // Verificar que hay navegación (puede ser header, nav, o breadcrumbs)
    cy.get('nav, .navbar, .header, .breadcrumbs').should('exist')
  })

  it('debería tener enlaces a todas las secciones', () => {
    const sections = [
      '01-orientacion-perfil-y-metodologia',
      '02-fundamentos-y-adopcion-devops',
      '03-integracion-continua',
      '04-automatizacion-de-pruebas',
      '05-arquitectura-y-escalabilidad',
      '06-tecnologia-cloud-y-devops',
      '07-despliegue-y-monitoreo-continuo',
      '08-desarrollo-de-portafolio',
      '09-empleabilidad-industria-digital'
    ]

    sections.forEach(section => {
      cy.get(`a[href*="${section}"]`).should('exist')
    })
  })

  it('debería navegar a secciones específicas', () => {
    // Navegar a la primera sección
    cy.get('a[href*="01-orientacion-perfil-y-metodologia"]').click()
    cy.url().should('include', '01-orientacion-perfil-y-metodologia')
    
    // Verificar que la página cargó
    cy.checkPageLoaded()
  })

  it('debería mostrar contenido de las secciones', () => {
    // Navegar a una sección específica
    cy.visit('/docs/01-orientacion-perfil-y-metodologia')
    
    // Verificar que hay contenido
    cy.get('body').should('not.be.empty')
    
    // Verificar que hay encabezados
    cy.get('h1, h2, h3').should('exist')
  })

  it('debería tener navegación entre secciones', () => {
    // Navegar a una sección
    cy.visit('/docs/02-fundamentos-y-adopcion-devops')
    
    // Verificar que hay navegación
    cy.get('a[href*="01-orientacion-perfil-y-metodologia"]').should('exist')
    cy.get('a[href*="03-integracion-continua"]').should('exist')
  })

  it('debería tener búsqueda funcional si existe', () => {
    // Verificar si hay campo de búsqueda (opcional)
    cy.get('body').then(($body) => {
      if ($body.find('input[type="search"], .search-input, #search').length > 0) {
        cy.get('input[type="search"], .search-input, #search').type('devops')
        cy.get('input[type="search"], .search-input, #search').should('have.value', 'devops')
      } else {
        // Si no hay búsqueda, el test pasa (es opcional)
        cy.log('Campo de búsqueda no encontrado - es opcional')
      }
    })
  })

  it('debería tener tabla de contenidos si existe', () => {
    // Verificar si hay TOC (opcional)
    cy.get('body').then(($body) => {
      if ($body.find('.toc, .table-of-contents, [role="navigation"]').length > 0) {
        cy.get('.toc, .table-of-contents, [role="navigation"]').find('a[href]').should('exist')
      } else {
        // Si no hay TOC, el test pasa (es opcional)
        cy.log('Tabla de contenidos no encontrada - es opcional')
      }
    })
  })
})
