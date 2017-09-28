const expect = require('chai').expect;
const fs = require('fs');
const add = require('../commands/add.js');
const complete = require('../commands/complete.js');
const del = require('../commands/del.js');
const list = require('../commands/list.js');

// bds: import from fileio, don't redefine!
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';
const { readFromFile, writeToFile } = require('../fileio/fileio.js');

// bds: you need more tests here. Have you tested all of the specs?
// bds: for example, I don't see any of the command line output tested
// bds: (that is, nothing in the tasks file has been tested)
// bds: and what about adding a task after you've deleted a task? do you get
// bds: the expected id? What about after completing?
// bds: what happens if you try to delete / complete a task that doesn't exist?
// bds: what happens if you try to create an empty task?
// bds: how about testing fileio? as mentioned, createFileIfNeeded doesn't seem
// bds: to be working :-/

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
      // bds: I would use "testCountBefore" and "testCountAfter", as testArr and finalArr aren't arrays
      // bds: That said, because you're using a beforeEach() which empties the file every time,
      // bds: You *know* the testCountBefore is 0, so you only have to test that the
      // bds: testCountAfter is 1. That's the advantage of working with known
      // bds: test data. :-)
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
      // bds: use a more descriptive variable name than testVal -- I was confused
      // bds: as to what it stood for
      // bds: I would call it something like "maxTaskID" or "testTaskID"
      let testVal = 2;
      add('wash dog');
      add('make dinner');
      // bds: see comments above about known test data
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
      // bds: If you have multiple tests that use the same setup (adding two tasks, say)
      // bds: you can either make a function or group them and use a beforeEach()
      let testVal = 1;
      add('wash dog');
      add('make dinner');
      complete(testVal);

      // bds: console.log should only be used in debugging for tests, never in
      // bds: the final tests
      console.log(readFromFile(taskFile));
      // bds: I think you probably meant to fill out this expect and it got
      // bds: overlooked. :-)
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
      // bds: tests need to be completed using expects, not console.logs
      // bds: often automated systems check the test results, and they need
      // bds: officiall "pass" or "fail" to know whether to move on.
      // bds: this test will always pass, because there's no expect / assert / should
      // bds: to raise an exception if behavior is not as you'd expect
      console.log(list());
    })
  })
})

// bds: I know I suggested a lot of refactoring of the rest of your code. I would
// bds: strongly recommend you respond to the feedback on this file *first* and
// bds: *then* refactor. That's the huge benefit of having a robust test suite:
// bds: you can refactor your code, re-run the tests, and have confidence that
// bds: you didn't break anything.
