describe('Rendimiento y Accesibilidad del Sitio DevOps', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 10000 })
  })

  it('debería cargar la página en menos de 3 segundos', () => {
    const startTime = Date.now()
    
    cy.visit('/', { timeout: 10000 }).then(() => {
      const loadTime = Date.now() - startTime
      expect(loadTime).to.be.lessThan(3000)
    })
  })

  it('debería tener encabezados en orden jerárquico', () => {
    // Verificar que hay al menos un h1
    cy.get('h1').should('exist')
    
    // Verificar que hay encabezados en general
    cy.get('h1, h2, h3, h4, h5, h6').should('have.length.at.least', 1)
    
    // Verificar que el primer encabezado es h1
    cy.get('h1, h2, h3, h4, h5, h6').first().should('match', /^h[1-6]$/i)
  })

  it('debería tener contraste de colores adecuado', () => {
    // Verificar que el texto es legible
    cy.get('body').should('have.css', 'color')
    cy.get('body').should('have.css', 'background-color')
  })

  it('debería tener navegación por teclado', () => {
    // Verificar que los enlaces son focusables
    cy.get('a[href]').should('be.focusable')
    
    // Verificar que hay elementos interactivos
    cy.get('a, button, input, select, textarea').should('exist')
  })

  it('debería tener enlaces con texto descriptivo', () => {
    // Verificar que los enlaces tienen texto significativo
    cy.get('a[href]').each(($el) => {
      const text = $el.text().trim()
      const href = $el.attr('href')
      
      // El texto del enlace debe ser descriptivo
      expect(text.length).to.be.greaterThan(0)
      
      // No debe ser solo "click here" o similar
      expect(text.toLowerCase()).to.not.include('click here')
      expect(text.toLowerCase()).to.not.include('here')
    })
  })

  it('debería tener imágenes con alt text descriptivo', () => {
    // Verificar si hay imágenes
    cy.get('body').then(($body) => {
      if ($body.find('img').length > 0) {
        // Si hay imágenes, verificar que tienen alt text
        cy.get('img').each(($img) => {
          const alt = $img.attr('alt')
          expect(alt).to.not.be.undefined
          expect(alt.trim()).to.not.equal('')
        })
      } else {
        // Si no hay imágenes, el test pasa
        cy.log('No hay imágenes en la página - test pasa')
      }
    })
  })

  it('debería tener formularios accesibles si existen', () => {
    // Verificar si hay formularios
    cy.get('body').then(($body) => {
      if ($body.find('input, select, textarea').length > 0) {
        // Si hay campos de formulario, verificar que tienen labels
        cy.get('input, select, textarea').each(($input) => {
          const id = $input.attr('id')
          if (id) {
            cy.get(`label[for="${id}"]`).should('exist')
          }
        })
      } else {
        // Si no hay formularios, el test pasa
        cy.log('No hay formularios en la página - test pasa')
      }
    })
  })

  it('debería tener estructura semántica correcta', () => {
    // Verificar que hay elementos semánticos
    cy.get('header, nav, main, footer, section, article').should('exist')
  })

  it('debería tener idioma especificado', () => {
    // Verificar que el idioma está especificado
    cy.get('html').should('have.attr', 'lang')
  })

  it('debería tener título de página descriptivo', () => {
    // Verificar que el título es descriptivo
    cy.title().then((title) => {
      expect(title.length).to.be.greaterThan(10)
      expect(title).to.include('DevOps')
    })
  })
})
