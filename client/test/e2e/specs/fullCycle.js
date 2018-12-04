// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'full cycle': function test(browser) {
    const devServer = browser.globals.devServerURL;

    const title = Math.random().toString(36).substring(7);
    const text = Math.random().toString(36).substring(7);

    browser
      .url(devServer)
      .waitForElementVisible('#app', 3000)
      .assert.attributeEquals('button[type="submit"]', 'disabled', 'true')
      .setValue('input[name="title"]', title)
      .assert.attributeEquals('button[type="submit"]', 'disabled', 'true')
      .setValue('textarea[name="text"]', text)
      .click('button[type="submit"]')
      .pause(1000)
      .assert.containsText('.message', 'Data has been added successfully.')
      .click('.sidebar ul li:nth-child(1)')
      .assert.urlEquals(`${devServer}/#/Logs`)
      .pause(2000)
      .assert.containsText('table tbody', title)
      .assert.containsText('table tbody', text)
      .click('.sidebar ul li:nth-child(2)')
      .assert.urlEquals(`${devServer}/#/Data`)
      .pause(2000)
      .assert.containsText('table tbody', title)
      .assert.containsText('table tbody', text)
      .end();
  },
};
