const should = require('chai').should();
const chai = require('chai');
const Subtract = require('../index');
const sinon = require('sinon');



describe('Spy Tests', function(){

    it('should log result of subtract', function(){
        let numberOne = 3;
        let numberTwo = 1;

        const logSpy = sinon.spy();

        Subtract(numberOne, numberTwo, logSpy)

        logSpy.called.should.be.true;
    })

    it('should call log with result of subtract', function(){
        let numberOne = 3;
        let numberTwo = 1;

        const logSpy = sinon.spy();

        Subtract(numberOne, numberTwo, logSpy)

        logSpy.calledWith(2).should.be.true;
    })
})



// const expect = chai.expect;
// const assert = chai.assert;
// const Add = require('../index');


// describe('Addition Tests', function(){
//     it('should return 3 when passed one and two', function() {
//         let numberOne = 1;
//         let numberTwo = 2;

//         let expectedResult = 3;

//         const actualResult = Add(numberOne, numberTwo)

//         // actualResult.should.equal(expectedResult)
//         // expect(actualResult).to.equal(expectedResult)
//         assert.equal(actualResult, expectedResult, 'error: should return 3 when passed one and two')
//     })

//     it('should not return 3 when passed one and four', function() {
//         let numberOne = 1;
//         let numberTwo = 4;

//         let notExpectedResult = 3;

//         const actualResult = Add(numberOne, numberTwo)

//         // actualResult.should.not.equal(notExpectedResult)
//         // expect(actualResult).to.not.equal(notExpectedResult)
//         assert.notEqual(actualResult, notExpectedResult, 'error: should not return 3 when passed one and four')

//     })
// })