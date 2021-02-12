let homepage = function(){

    let url = 'http://juliemr.github.io/protractor-demo/'
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let operator = element(by.model('operator'));
    let addition = element(by.xpath("//option[@value='ADDITION']"));
    let subtraction = element(by.xpath("//option[@value='SUBTRACTION']"));
    let division = element(by.xpath("//option[@value='DIVISION']"));
    let multiplication = element(by.xpath("//option[@value='MULTIPLICATION']"));
    let modulo = element(by.xpath("//option[@value='MODULO']"));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrl = function(){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };
    
    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };
    
    this.selectOperator = function(operation){
        operator.click();
        if (operation === "+")
            addition.click();
        else if (operation === "-")
            subtraction.click();
        else if (operation === "/")
            division.click();
        else if (operation === "*")
            multiplication.click();
        else
            modulo.click();
    };

    this.goButtonClick = function(){
        goButton.click();
    };

    this.verifyResult = function(output){
        let result = element(by.cssContainingText('.ng-binding', output));
        expect(result.getText()).toEqual(output);
    };
};

module.exports = new homepage();