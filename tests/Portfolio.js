module.exports={
    tags:['portfolio'],
    'Open PVX website':function(browser){
        browser
        .windowMaximize()
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
        .pause(1000)
        
    },
    'Land on Portfolio page': function(browser){
        browser
        .waitForElementVisible('#menu-buy-manager',1000)
        .click('#menu-buy-manager')
        .waitForElementVisible('#menu-item-portfolio', 1000)
        .click('#menu-item-portfolio')
        
    },

    'Create Portfolio': function(browser){
        browser
        .waitForElementVisible('#btn-create-new',1000)
        .click('#btn-create-new')
        .setValue('#portfolio-name', 'SMtest01')
        .pause(2000)
        .click('#input-portfolio-advertiser')
        .pause(1000)
        .waitForElementVisible('#input-portfolio-advertiser option[label="Apple (APL)"]',2000)
        .click('#input-portfolio-advertiser option[label="Apple (APL)"]')
        .click('#picklist-portfolio-brands-selection')
        .waitForElementVisible('#i-phone-x', 2000)
        .click('#i-phone-x')
        .click('#picklist-portfolio-demographics-selection')
        .waitForElementVisible('#adults-21-to-49',2000)
        .click('#adults-21-to-49')
        .click('#chicago')
        .click('#btn-save-portfolio')
        .pause(5000)
    }

};