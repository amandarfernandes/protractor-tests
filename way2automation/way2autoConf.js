var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['./login/login.spec.js'],
    specs: ['./multiform/multiform.spec.js'],
    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function() {
        browser.driver.manage().window().setSize(1680, 1050);
        jasmine.getEnv().addReporter(reporter);
    },
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve) {
            reporter.afterLaunch(resolve(this, exitCode));
        });
    }
}