const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager')

//describe('Employee',()=>{
test('Manager testing to get the class name Manager',()=>{
    var testManager = new Manager('Abe', 1, 'email', '7878787');
    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.id).toEqual(expect.any(Number));
    expect(testManager.email).toEqual(expect.any(String));
    expect(testManager.id).toEqual(expect.any(Number));

});
//})