// bds: I'd like to see this file made compliant with airbnb eslint

const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio.js');

// bds: this taskFile line should be confined to fileio, instead of repeated
// bds: in each of the commands files
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';

// bds: JavaScript generally uses camelCase (i.e. taskId instead of task_id)
const complete = (task_id) => {
  // bds: see listArr comments in "add.js" :-)
  let listArr = readFromFile(taskFile);

  // bds: The below works, but it's more laborious than it needs to be.
  // bds: Consider using .filter() instead, which does exactly what you're
  // bds: doing here, but in a more "idiomatic javascript" way
  const newArr = []
  var completed

for (var i = 0; i <listArr.length; i++) {
    if(listArr[i].id_number != task_id) {
      newArr.push(listArr[i]);
    } else {
      listArr[i].completed = true;
      completed = listArr[i].task;
      newArr.push(listArr[i]);
    };
  };

  // bds: this is a stylistic choice, but since listJSON is never re-used,
  // bds: you could combine these lines into writeToFile(JSON.stringify(newArr))
  const listJSON = JSON.stringify(newArr);
  writeToFile(listJSON);

  console.log(`Completed task ${task_id}: ${completed}`);
};

module.exports = complete;
