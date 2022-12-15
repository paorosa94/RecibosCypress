const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    chromeWebSecurity: false,
    reporter:'mocha-junit-reporter',
    reporterOptions:{
      mochafile: 'reports/test-results.xml',
      toConsole:true,
      output:true,
      testCaseSwitchClassnameAndName:true
    },

    retries:0,
    videos:false,

    e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl:"",
    //detecta donde estan los archivos para cucumber
  //spePattern:['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
  },
});
