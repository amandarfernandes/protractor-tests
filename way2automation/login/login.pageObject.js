'use strict';

module.exports = {
    LoginPage: {
        username: element(by.model('Auth.user.name')),
        password: element(by.model('Auth.user.password')),
        userDescription: element(by.model('model[options.key]')),
        loginBtn: element(by.css('[ng-click="Auth.login()"]'))
    },
    go: function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.waitForAngular();
    },
    get title() { return browser.getTitle(); },
    enterUser: function(user) {
        this.LoginPage.username.sendKeys(user);
    },
    enterPassword: function(passwd) {
        this.LoginPage.password.sendKeys(password);
    },
    enterDescription: function(desc) {
        this.LoginPage.userDescription.sendKeys(desc);
    },
    login: function(user, passwd, desc) {
        this.enterUser(user);
        this.enterPassword(passwd);
        this.enterDescription(desc);
        this.loginBtn.click();
    }
};