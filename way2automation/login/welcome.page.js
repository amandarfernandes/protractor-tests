var WelcomePage = function() {
    this.logout = element(by.partialLinkText('Logout'));
    this.loggedIn = element.all(by.css('[class="ng-scope"]'));

    this.getLoggedInMsg = function() {
        return this.loggedIn.get(2).getText();
    };

    this.getLogoutMsg = function() {
        return this.loggedIn.get(3).getText();
    };

    this.selectLogout = function() {
        this.logout.click();
    };
};
module.exports = WelcomePage;