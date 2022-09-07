const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern')

//describe('Employee',()=>{
test('Intern testing to get the class name Intern',()=>{
    var testIntern = new Intern('Abe', 1, 'email', 'school');
    expect(testIntern.name).toEqual(expect.any(String));
    expect(testIntern.id).toEqual(expect.any(Number));
    expect(testIntern.email).toEqual(expect.any(String));
    expect(testIntern.email).toEqual(expect.any(String));

});
//})