//Automated testing with MOCHA
//Objective: It should serve the core functionality and also give the results for a set of parameters
//Steps: We give inputs and check the outputs and validate the results are correct
//If the result is not displayed or result is wrong
//We will go back to code and find the appropriate line and fix it
//Re-test
//Multiple re-tests - Humans can make mistakes
//Automate the testing: by writing test cases and providing test cases to automated tool
//Automated testing: along with code, seperate test cases are written.
//Test cases run our code/functions in multiple ways/scenarios
//Behavior Driven Development (BDD)
//1. Tests 2. Documentation 3. Examples

//Examples
//=================
//Objective: write a function to calulate power of a number: power(m,n) m is an integer and n is also an integer. n>=0
//specification: spec
// describe('power', function () {
//   it('raises m to nth power', function () {
//     assert.equal(power(2, 3), 8);
//   });
// });

//describe function power
//workers: it blocks (more readable format)
//asset.* - power function is getting executed correctly or not

//Tools:
//Mocha: This is the core frame work that provides "describe" and "it" functionality
//Chai: This library provides "assertions"
//Sinon (oversight/supervisor on the testing: ): right now we will not use
