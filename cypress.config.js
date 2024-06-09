const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://nf-staging.vegrow.in",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
