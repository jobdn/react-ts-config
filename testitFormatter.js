const { TestItFormatter } = require('testit-adapter-cucumber');

module.exports = class CustomFormatter extends TestItFormatter {
  constructor(options) {
    super(options, {
      //   // TODO: Что означают эти поля?
      //   url: 'https://team-gjga.testit.software/browse/1',
      //   privateToken: '<token>',
      //   projectId: '1',
      //   configurationId: '<id>',
      //   testRunId: '<optional id>',
    });
  }
};
