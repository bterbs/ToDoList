const fs = require('fs');
const task_id = process.argv.slice(3).join(' ');
const { readFromFile, writeToFile } = require('../fileio/fileio.js');
const taskFile =
  process.env.NODE_ENV ===
   'test' ? './tasksTest.json' : './tasks.json';
let listArr = readFromFile(taskFile);


const del = () => {
  var removed = []
  const newArr = []
  for (var i = 0; i <listArr.length; i++) {
    if(listArr[i].id_number != task_id) {
      newArr.push(listArr[i]);
    } else {
      removed.push(listArr[i]);
    };
  };

  const listJSON = JSON.stringify(newArr);
  writeToFile(listJSON);

  console.log('Deleted task ' + removed[0].id_number + ': ' + removed[0].task);
};


module.exports = del;
