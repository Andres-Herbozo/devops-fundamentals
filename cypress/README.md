# Tests de Cypress para Fundamentos DevOps

Este directorio contiene tests automatizados para el sitio web de Fundamentos DevOps.

## Estructura de Tests

### 1. `homepage.cy.js`
- Tests de la página principal
- Verificación de contenido y elementos
- Validación de secciones del curso

### 2. `navigation.cy.js`
- Tests de navegación entre secciones
- Verificación de enlaces internos
- Navegación a documentación

### 3. `functionality.cy.js`
- Tests de funcionalidades básicas
- Validación de enlaces externos
- Verificación de estructura HTML

### 4. `documentation.cy.js`
- Tests de la documentación
- Navegación entre secciones
- Verificación de contenido

### 5. `performance-accessibility.cy.js`
- Tests de rendimiento
- Validación de accesibilidad
- Verificación de estándares web

## Comandos Personalizados

### `cy.checkPageLoaded()`
Verifica que la página cargó correctamente.

### `cy.checkTitle(expectedText)`
Verifica que el título contiene texto específico.

### `cy.checkContent(selector, expectedText)`
Verifica que un elemento contiene texto específico.

### `cy.checkLink(linkText, expectedUrl)`
Verifica que un enlace funciona correctamente.

### `cy.checkSectionVisible(sectionTitle)`
Verifica que una sección está visible.

### `cy.navigateToSection(sectionTitle)`
Navega a una sección específica.

## Cómo Ejecutar los Tests

### 1. Abrir Cypress Test Runner
```bash
npx cypress open
```

### 2. Seleccionar E2E Testing
- Elige "E2E Testing"
- Selecciona "Electron" como navegador
- Haz clic en "Start E2E Testing"

### 3. Ejecutar Tests Específicos
- Haz clic en cualquier archivo `.cy.js` para ejecutarlo
- Los tests se ejecutarán automáticamente

### 4. Ejecutar Todos los Tests
```bash
npx cypress run
```

## Configuración

### `cypress.config.js`
- URL base: `http://localhost:3000`
- Viewport: 1280x720
- Screenshots en fallos: habilitado
- Videos: deshabilitado

## Personalización

### Agregar Nuevos Tests
1. Crea un nuevo archivo `.cy.js` en `cypress/e2e/`
2. Usa la estructura `describe()` y `it()`
3. Utiliza los comandos personalizados existentes

### Modificar Configuración
Edita `cypress.config.js` para cambiar:
- URL base
- Viewport
- Timeouts
- Otras opciones

## Troubleshooting

### Tests Fallan
- Verifica que tu aplicación esté corriendo en `localhost:3000`
- Ajusta la URL base en `cypress.config.js`
- Revisa la consola del navegador para errores

### Cypress No Abre
- Ejecuta `npx cypress cache clear`
- Reinstala con `npm install -D cypress`
- Verifica la versión de Node.js (requiere 14+)

## Recursos Adicionales

- [Documentación oficial de Cypress](https://docs.cypress.io/)
- [Guía de comandos personalizados](https://docs.cypress.io/api/cypress-api/custom-commands)
- [Mejores prácticas de testing](https://docs.cypress.io/guides/references/best-practices)
