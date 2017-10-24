const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio.js');

const taskId = process.argv.slice(3).join(' ');

function del(taskId) {
  return readFromFile(taskFile, deletedFile);
};

const deletedFile = (tasks) => {
  const remainingTasks = tasks.filter(function( value, index, array) {
    return (tasks[index].id_number != taskId)
  });

  writeToFile(JSON.stringify(remainingTasks));

  console.log(`Deleted task ${taskId}`);
  return remainingTasks;
}


module.exports = del;
