const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio.js');

const complete = (taskId) => {
  const myTasks = readFromFile(taskFile);
  let completed;

  myTasks.map(function(task) {
    if (task.id_number == taskId) {
      task.completed = true;
      completed = task.task;
    };
  });

  writeToFile(JSON.stringify(myTasks));

  console.log(`Completed task ${taskId}: ${completed}`);
  return myTasks;
};

module.exports = complete;
