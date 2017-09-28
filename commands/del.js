// bds: I'd like to see this file made compliant with airbnb eslint

const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio.js');

// bds: this taskFile line should be confined to fileio, instead of repeated
// bds: in each of the commands files
const taskFile =
  process.env.NODE_ENV ===
   'test' ? './tasksTest.json' : './tasks.json';

// see complete.js comment re: camelCase
function del(task_id) {
  var newArr
  let listArr = readFromFile(taskFile);

// bds: great use of the .filter() method here!
// bds: you could simplify the function argument to:
// bds: (value) => value.id_number != task_id
  newArr = listArr.filter(function( value, index, array) {
    return (listArr[index].id_number != task_id)
  })


  const listJSON = JSON.stringify(newArr);
  writeToFile(listJSON);

  console.log(`Deleted task ${task_id}`);
}


module.exports = del;
