const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer')

//describe('Employee',()=>{
test('Engineer testing to get the class name Engineer ',()=>{
    var testEngineer  = new Engineer ('Abe', 1, 'email', 1234567);
    expect(testEngineer .name).toEqual(expect.any(String));
    expect(testEngineer .id).toEqual(expect.any(Number));
    expect(testEngineer .email).toEqual(expect.any(String));
    expect(testEngineer .github).toEqual(expect.any(Number));

});
//})