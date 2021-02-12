let homepage = require('../pages/homepage');

describe('This is calculator test', function(){

    it('Addition Test', function(){
        homepage.getUrl();
        
        homepage.enterFirstNumber('2');
        homepage.selectOperator("+")
        homepage.enterSecondNumber('3');
        homepage.goButtonClick();
        homepage.verifyResult('5');
        browser.sleep(1000) 
    });

    it('Subtraction Test', function(){
        homepage.getUrl();
        
        homepage.enterFirstNumber('3');
        homepage.selectOperator("-")
        homepage.enterSecondNumber('2');
        homepage.goButtonClick();
        homepage.verifyResult('1');
        browser.sleep(2000)
    });

    it('Multiplication Test', function(){
        homepage.getUrl();
        
        homepage.enterFirstNumber('3');
        homepage.selectOperator("*")
        homepage.enterSecondNumber('2');
        homepage.goButtonClick();
        homepage.verifyResult('6');
        browser.sleep(2000)
    });

    it('Division Test', function(){
        homepage.getUrl();
        
        homepage.enterFirstNumber('6');
        homepage.selectOperator("/")
        homepage.enterSecondNumber(2);
        homepage.goButtonClick();
        homepage.verifyResult('3');
        browser.sleep(2000)
    });

    it('Modulo Test', function(){
        homepage.getUrl();
        
        homepage.enterFirstNumber('6');
        homepage.selectOperator("%")
        homepage.enterSecondNumber(2);
        homepage.goButtonClick();
        homepage.verifyResult('0');
        browser.sleep(2000)
    });
});