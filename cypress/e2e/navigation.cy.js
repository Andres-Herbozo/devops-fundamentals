describe('Navegación del Sitio DevOps', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería navegar a la documentación al hacer clic en "Comenzar Curso"', () => {
    cy.contains('Comenzar Curso').click()
    cy.url().should('include', '/docs')
  })

  it('debería navegar a la sección de automatización de pruebas', () => {
    // Primero ir a la documentación
    cy.visit('/docs')
    // Luego buscar el enlace específico
    cy.get('a[href*="04-automatizacion-de-pruebas"]').click()
    cy.url().should('include', '/docs/04-automatizacion-de-pruebas')
  })

  it('debería navegar a la sección de arquitectura', () => {
    cy.visit('/docs')
    cy.get('a[href*="05-arquitectura-y-escalabilidad"]').click()
    cy.url().should('include', '/docs/05-arquitectura-y-escalabilidad')
  })

  it('debería navegar a la sección de orientación y metodología', () => {
    cy.visit('/docs')
    cy.get('a[href*="01-orientacion-perfil-y-metodologia"]').click()
    cy.url().should('include', '/docs/01-orientacion-perfil-y-metodologia')
  })

  it('debería navegar a la sección de fundamentos DevOps', () => {
    cy.visit('/docs')
    cy.get('a[href*="02-fundamentos-y-adopcion-devops"]').click()
    cy.url().should('include', '/docs/02-fundamentos-y-adopcion-devops')
  })

  it('debería navegar a la sección de integración continua', () => {
    cy.visit('/docs')
    cy.get('a[href*="03-integracion-continua"]').click()
    cy.url().should('include', '/docs/03-integracion-continua')
  })

  it('debería navegar a la sección de tecnología cloud', () => {
    cy.visit('/docs')
    cy.get('a[href*="06-tecnologia-cloud-y-devops"]').click()
    cy.url().should('include', '/docs/06-tecnologia-cloud-y-devops')
  })

  it('debería navegar a la sección de despliegue y monitoreo', () => {
    cy.visit('/docs')
    cy.get('a[href*="07-despliegue-y-monitoreo-continuo"]').click()
    cy.url().should('include', '/docs/07-despliegue-y-monitoreo-continuo')
  })

  it('debería navegar a la sección de portafolio', () => {
    cy.visit('/docs')
    cy.get('a[href*="08-desarrollo-de-portafolio"]').click()
    cy.url().should('include', '/docs/08-desarrollo-de-portafolio')
  })

  it('debería navegar a la sección de empleabilidad', () => {
    cy.visit('/docs')
    cy.get('a[href*="09-empleabilidad-industria-digital"]').click()
    cy.url().should('include', '/docs/09-empleabilidad-industria-digital')
  })
})
