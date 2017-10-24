const expect = require('chai').expect;
const fs = require('fs');
const add = require('../commands/add.js');
const complete = require('../commands/complete.js');
const del = require('../commands/del.js');
const list = require('../commands/list.js');
const { readFromFile, taskFile } = require('../fileio/fileio.js');

/* Test File does not reflect update of code from synchronous to asynchronous.
*/

context('ToDo Functionality', () => {
  beforeEach(() => {
    fs.writeFileSync(taskFile, '[{"id_number":1,"task":"wash dog","completed":false},{"id_number":2,"task":"clean dishes","completed":false}]');
  });

  describe('add()', () => {
    it('should be a function', () => {
      expect(add).to.be.a('function');
    })
    it('it should return undefined', () => {
      expect(add('new item')).to.be.an('undefined');
    })
    it('should add a task to the task file', () => {
      add('check mail');
      const testCountAfter = readFromFile(taskFile).length;
      expect(testCountAfter).to.equal(3);
    })
  })

  describe('del()', () => {
    it('should be a function', () => {
      expect(del).to.be.a('function');
    })
    it('should delete a task from the task file', () => {
      del(2);
      const testLengthAfter = readFromFile(taskFile).length;
      expect(testLengthAfter).to.equal(1);
    })
  })

  describe('complete()', () => {
    it('should be a function', () => {
      expect(complete).to.be.a('function');
    })
    it('should mark the task as complete', () => {
      complete(1);
      const testArrayAfter = readFromFile(taskFile);
      const completedItems = testArrayAfter.filter(function(item) {
        return item.completed;
      });
      expect(completedItems.length).to.equal(1);
    })
  })

  describe('list()', () => {
    it('should be a function', () => {
      expect(list).to.be.a('function');
    })
    it('should output a list of tasks', () => {
      console.log(list());
    })
  })
})
