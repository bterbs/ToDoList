const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio.js');
const task_id = (process.argv[3]);
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';
let listArr = readFromFile(taskFile);

const complete = () => {
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

  const listJSON = JSON.stringify(newArr);
  writeToFile(listJSON);

  console.log('Completed task ' + task_id + ': ' + completed);
};

module.exports = complete;
