
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

//describe('Employee',()=>{
test('Employee testing to get the class name Employee',()=>{
    var testEmployee = new Employee('Abe', 1, 'email');
    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.id).toEqual(expect.any(Number));
    expect(testEmployee.email).toEqual(expect.any(String));

});
//})