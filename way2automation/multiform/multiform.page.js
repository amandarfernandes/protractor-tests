var MultiformPage = function() {
    this.name = element(by.model('formData.name'));
    this.email = element(by.model('formData.email'));
    this.interests = element(by.css('[ui-sref="form.interests"]'));
    this.console = element.all(by.model('formData.type'));
    this.payment = element(by.css('[ui-sref="form.payment"]'));
    this.submitBtn = element(by.css('button[type="submit"]'));
    this.pre = element(by.tagName('pre'));

    this.go = function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
        browser.waitForAngular();
    };

    this.title = function() {
        return browser.getTitle();
    };

    this.firstSectionDisplayed = function() {
        return (this.name.isDisplayed() && this.email.isDisplayed() && this.interests.isDisplayed());
    };

    this.secondSectionDisplayed = function() {
        return (this.console.isDisplayed() && this.payment.isDisplayed());
    }

    this.thirdSectionDisplayed = function() {
        return this.submitBtn.isDisplayed();
    };

    this.setName = function(name) {
        this.name.sendKeys(name);
    };

    this.setEmail = function(email) {
        this.email.sendKeys(email);
    };

    this.infoDisplayed = function() {
        return this.pre.getText();
    };
};
module.exports = MultiformPage;