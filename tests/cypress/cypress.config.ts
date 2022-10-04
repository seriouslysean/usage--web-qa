import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // TODO: Could potentially add support for the production build on port 4173
    baseUrl: 'http://127.0.0.1:5173/',
    specPattern: 'tests/cypress/e2e/**/*.cy.ts',
    excludeSpecPattern: '',
    supportFile: 'tests/cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // https://docs.cypress.io/guides/references/configuration#Videos
  video: false,
  // https://docs.cypress.io/guides/references/configuration#Folders-Files
  downloadsFolder: 'tests/cypress/downloads',
  fixturesFolder: 'tests/cypress/fixtures',
  screenshotsFolder: 'tests/cypress/screenshots',
  videosFolder: 'tests/cypress/videos',
});
