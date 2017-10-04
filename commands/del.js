const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio.js');

function del(taskId) {
  const tasks = readFromFile(taskFile);

  const remainingTasks = tasks.filter(function( value, index, array) {
    return (tasks[index].id_number != taskId)
  });

  writeToFile(JSON.stringify(remainingTasks));

  console.log(`Deleted task ${taskId}`);
  return remainingTasks;
}


module.exports = del;
