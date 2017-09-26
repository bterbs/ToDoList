const expect = require('chai').expect;
const fs = require('fs');
const add = require('../commands/add.js');
const tasks = require('../tasks.json')

require('../tasks');

describe('add()', () => {
  it('should be a function', () => {
    expect(add).to.be.a('function');
  })
  it('it should return undefined', () => {
    expect(add('new item')).to.be.an('undefined');
  })
  it('should add a task when file contains items', () => {
    var testArr = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'));
    add('new item');
    var finalArr = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'));
    expect(testArr.length+1).to.equal(finalArr.length);
  })

})
