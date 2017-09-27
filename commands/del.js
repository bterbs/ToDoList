const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio.js');
const taskFile =
  process.env.NODE_ENV ===
   'test' ? './tasksTest.json' : './tasks.json';


function del(task_id) {
  var newArr
  let listArr = readFromFile(taskFile);

  newArr = listArr.filter(function( value, index, array) {
    return (listArr[index].id_number != task_id)
  })


  const listJSON = JSON.stringify(newArr);
  writeToFile(listJSON);

  console.log(`Deleted task ${task_id}`);
}


module.exports = del;
