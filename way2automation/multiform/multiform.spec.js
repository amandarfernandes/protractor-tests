var MultiformPage = require('./multiform.page.js');

describe('Multiform page', function() {
    var multiformPage = new MultiformPage();

    beforeEach(function() {
        multiformPage.go();
    });

    xit('should have a page title', function() {
        expect(multiformPage.title()).toEqual('Protractor practice website - Multiform');
    });

    xit('should load first section', function() {
        expect(multiformPage.firstSectionDisplayed()).toBe(true);
    });

    it('should accept name and email and display it below', function() {
        multiformPage.setName('Amanda');
        multiformPage.setEmail('aaa@yahoo.com');
        expect(multiformPage.infoDisplayed()).toContain('{"name":"Amanda","email":"aaa@yahoo.com"}');
    });
});