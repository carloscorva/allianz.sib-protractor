// spec.js
describe('Sib Module is tested using Protractor', function () {

    var endpoint_welcome = 'http://localhost:8081/cibox-testclients/#!/welcome';
    var endpoint_sib = 'http://localhost:8081/cibox-testclients/#!/sib';
    var timeout = 1000;
    var timeoutDetail = 5000;

    console.log("\n************ URI::" + endpoint_sib);

    it('should have a title', function () {
        console.log('should have a title');
        browser.get(endpoint_welcome);
        expect(browser.getTitle()).toEqual('CIBOX Admin');
    });

    it('should test: FindDocuments', function () {
        console.log('should get a result of the Searching using the following Criteria');
        browser.get(endpoint_sib);
        element(by.model('agentId')).sendKeys('102205075');
        // Submit the form
        element(by.name('sibForm')).submit().then(function () {
            element.all(by.repeater('salesDocument in salesDocuments')).count().then(function (count) {
                expect(count).toBe(18);
            });

        }, function (err) {
            console.log("Error::" + err);
        });
        browser.sleep(timeout);
    });

    it('should test: FindDocuments', function () {
        console.log("should get a result of the Searching using a concatenation of AgentId's");
        browser.get(endpoint_sib);
        element(by.model('agentId')).sendKeys('102205075, 102205017');
        // Submit the form
        element(by.name('sibForm')).submit().then(function () {
            element.all(by.repeater('salesDocument in salesDocuments')).count().then(function (count) {
                expect(count).toBe(25);
            });

        }, function (err) {
            console.log("Error::" + err);
        });
        browser.sleep(timeout);
    });

    it('should test: FindDocuments', function () {
        console.log("should validate the incorrect use of AgentId's concatenation");
        browser.get(endpoint_sib);
        element(by.model('agentId')).sendKeys('10220*,102205075');
        expect(element(by.name('submitButton')).isEnabled()).toBe(false);
        browser.sleep(timeout);
    });

    it('should test: FindDocuments', function () {
        console.log("should validate the incorrect number of AgentId's concatenation");
        browser.get(endpoint_sib);
        element(by.model('agentId')).sendKeys('102205075, 102205076, 102205077, 102205078, 102205079, 102205080, 102205081, 102205082, 102205083, 102205084, 102205085, 102205086, 102205087, 102205088, 102205089, 102205090, 102205091, 102205092, 102205093, 102205094, 102205095, 102205096, 102205097, 102205098, 102205099, 102205100, 102205101, 102205102, 102205103, 102205104, 102205105, 102205106, 102205107, 102205108, 102205109, 102205110, 102205111, 102205112, 102205113, 102205114, 102205115, 102205116, 102205117, 102205118, 102205119, 102205120, 102205121, 102205122, 102205123, 102205124, 102205125');
        expect(element(by.name('submitButton')).isEnabled()).toBe(false);
        browser.sleep(timeout);
    });

    it('should test: FindDocuments', function () {
        console.log('should test using AgentId with a wildcard: FindDocuments');
        browser.get(endpoint_sib);
        element(by.model('agentId')).sendKeys('1022050*');
        // Submit the form
        element(by.name('sibForm')).submit().then(function () {
            element.all(by.repeater('salesDocument in salesDocuments')).count().then(function (count) {
                expect(count).toBe(27);
            });

        }, function (err) {
            console.log("Error::" + err);
        });
        browser.sleep(timeout);
    });

    it('should test using a too short AgentId with wildcard: FindDocuments', function () {
        console.log('should test using a too short AgentId with wildcard: FindDocuments');
        browser.get(endpoint_sib);
        element(by.model('agentId')).sendKeys('10220*');
        expect(element(by.name('submitButton')).isEnabled()).toBe(false);
        browser.sleep(timeout);
    });
    

});