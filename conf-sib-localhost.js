// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec-sib-localhost.js'],
    capabilities: {
        browserName: 'chrome',
        acceptSslCerts: false
    },
    jasmineNodeOpts: {
        isVerbose: true
    }
}