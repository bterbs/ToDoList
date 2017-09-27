const expect = require('chai').expect;
const fs = require('fs');
const add = require('../commands/add.js');
const complete = require('../commands/complete.js');
const del = require('../commands/del.js');
const list = require('../commands/list.js');
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';
const { readFromFile, writeToFile } = require('../fileio/fileio.js');


context('ToDo Functionality', () => {
  beforeEach(() => {
    fs.writeFileSync(taskFile, '[]');
  })

  describe('add()', () => {
    it('should be a function', () => {
      expect(add).to.be.a('function');
    })
    it('it should return undefined', () => {
      expect(add('new item')).to.be.an('undefined');
    })
    it('should add a task to the task file', () => {
      var testArr = readFromFile(taskFile).length;
      add('new item');
      var finalArr = readFromFile(taskFile).length;
      expect(finalArr).to.equal(testArr+1);
    })
  })
  describe('del()', () => {
    it('should be a function', () => {
      expect(del).to.be.a('function');
    })
    it('should delete a task from the task file', () => {
      let testVal = 2;
      add('wash dog');
      add('make dinner');
      var testArr = readFromFile(taskFile).length;
      del(testVal);
      var testArrFinal = readFromFile(taskFile).length;
      expect(testArrFinal).to.equal(testArr-1);
    })
  })
})
