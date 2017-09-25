var LoginPage = require('./login.page.js');
var WelcomePage = require('./welcome.page');


describe('Way2Automation Login Page', function() {
    var loginPage = new LoginPage();
    var welcomePage = new WelcomePage();

    beforeEach(function() {
        loginPage.go();
    });

    it('should have a title', function() {
        expect(loginPage.title).toEqual('Protractor practice website - Registration');
    });

    it('should not allow empty username', function() {
        loginPage.setPassword('password');
        loginPage.setDescription('angular login');
        expect(loginPage.isLoginEnabled()).toBe(false);
    });

    it('should not allow empty password', function() {
        loginPage.setUser('angular');
        loginPage.setDescription('angular login');
        expect(loginPage.isLoginEnabled()).toBe(false);
    });

    it('should not allow empty user description', function() {
        loginPage.setUser('angular');
        loginPage.setPassword('password');
        expect(loginPage.isLoginEnabled()).toBe(false);
    });

    it('should allow you to login with all fields entered', function() {
        loginPage.setUser('angular');
        loginPage.setPassword('password');
        loginPage.setDescription('angular login');
        expect(loginPage.isLoginEnabled()).toBe(true);
    });

    it('should login a valid user', function() {
        loginPage.login('angular', 'password', 'angular user');
        expect(welcomePage.getLoggedInMsg()).toEqual('You\'re logged in!!');
        expect(welcomePage.getLogoutMsg()).toEqual('Logout');
    });

    it('Should allow logged in user to log out', function() {
        //log in
        loginPage.login('angular', 'password', 'angular user');

        //select logout link
        welcomePage.selectLogout();

        //verify user is back on login 
        expect(loginPage.isPageDisplayed()).toBe(true);
        expect(loginPage.isLoginEnabled()).toBe(false);
    });
});