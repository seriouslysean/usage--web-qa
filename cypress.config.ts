import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // TODO: Could potentially add support for the production build on port 4173
    baseUrl: 'http://127.0.0.1:5173/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
});
