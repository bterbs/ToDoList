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
  });

  // bds: You should have an afterEach() or after() that removes the
  // bds: tasksTest.json file, so it doesn't persist after the tests have been
  // bds: run

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

  describe('complete()', () => {
    it('should be a function', () => {
      expect(complete).to.be.a('function');
    })
    it('should mark the task as complete', () => {
      let testVal = 1;
      add('wash dog');
      add('make dinner');
      complete(testVal);
      console.log(readFromFile(taskFile));
      expect()
    })
  })

  describe('list()', () => {
    it('should be a function', () => {
      expect(list).to.be.a('function');
    })
    it('should output a list of tasks', () => {
      add('wash dog');
      add('make dinner');
      console.log(list());
    })
  })
})
