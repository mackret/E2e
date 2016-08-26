exports.config = {
    //This will load a selenium server automatically and kill it when done with the tests
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
    localSeleniumStandaloneOpts: {
        port: null,
        loopback: true
    },
    baseUrl: 'http://localhost:3000/#/',

    params: {
        relativeBasePath: ''
    },

    allScriptsTimeout: 60000,
    specs: ['e2e/**/*.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function(){
        browser.ignoreSynchronization = true;
        //require('babel-core/register');
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280, 720);
        browser.ignoreSynchronization = true;
    },
    rootElement: '[ng-app="maintenance"]',
    framework: 'jasmine'
};