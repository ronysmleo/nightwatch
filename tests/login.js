module.exports={
tags:['login'],
'Open PVX website':function(browser){
    browser
    .url('https://qa1983.provantagex.com')
    .waitForElementVisible('body', 1000)
    .assert.title('ProVantageX')
    .setValue('#username', 'shu@pvx.com')
    .setValue('#password','macallan1984!!')
    .waitForElementVisible('#btn-sign-in',1000)
    
},
'Click Sign in button': function(browser){
    browser
    .click('#btn-sign-in')
    .pause(5000)
    browser.saveScreenshot('./screenshots/login.jpg')

 }
};