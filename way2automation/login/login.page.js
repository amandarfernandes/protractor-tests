var LoginPage = function() {

    this.username = element(by.model('Auth.user.name'));
    this.password = element(by.model('Auth.user.password'));
    this.userDescription = element(by.model('model[options.key]'));
    this.loginBtn = element(by.css('[ng-click="Auth.login()"]'));
    var title = null;

    this.go = function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.waitForAngular();
        this.title = browser.getTitle();
    };

    this.setUser = function(user) {
        this.username.sendKeys(user);
    };

    this.setPassword = function(passwd) {
        this.password.sendKeys(passwd);
    };

    this.setDescription = function(desc) {
        this.userDescription.sendKeys(desc);
    };

    this.login = function(user, passwd, desc) {
        this.setUser(user);
        this.setPassword(passwd);
        this.setDescription(desc);
        this.loginBtn.click();
    };

    this.isLoginEnabled = function() {
        return this.loginBtn.isEnabled();
    };

    this.isPageDisplayed = function() {
        return this.loginBtn.isDisplayed();
    }
};
module.exports = LoginPage;