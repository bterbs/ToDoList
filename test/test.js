const expect = require('chai').expect;
const fs = require('fs');
const tasks = require('.taskFile')
const add = require('../commands/add.js');
const complete = require('../commands/complete.js');
const del = require('../commands/del.js');
const list = require('../commands/list.js');

require('../tasks');

describe('add()', () => {
  it('should be a function', () => {
    expect(add).to.be.a('function');
  })
  it('it should return undefined', () => {
    expect(add('new item')).to.be.an('undefined');
  })
  it('should add a task to the tasks.json file', () => {
    var testArr = JSON.parse(fs.readFileSync('taskFile', 'utf8'));
    add('new item');
    var finalArr = JSON.parse(fs.readFileSync('taskFile', 'utf8'));
    expect(testArr.length+1).to.equal(finalArr.length);
  })
})
describe('del()', () => {
  it('should be a function', () => {
    expect(del).to.be.a('function');
  })
  it('should delete a task from the tasks.json file', () => {
    var testArr = JSON.parse(readFromFile)
    add('new item');
    var finalArr = JSON.parse(readFromFile);
    expect(finalArr.length).to.equal(testArr.length-1);
  })
})
