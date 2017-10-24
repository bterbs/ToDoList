const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio.js');

const taskId = process.argv.slice(3).join(' ');

const complete = (taskId) => {
  return readFromFile(taskFile, completedFile);
};

const completedFile = function(myTasks) {
  let completed;

  myTasks.map(function(task) {
    if (task.id_number == taskId) {
      task.completed = true;
      completed = task.task;
    };
  });

  writeToFile(JSON.stringify(myTasks));

  console.log(`Completed task ${taskId}: ${completed}`);
  return
};

module.exports = complete;
