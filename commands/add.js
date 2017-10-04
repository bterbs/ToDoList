const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio');

const add = (newTask) => {
  const tasks = readFromFile(taskFile);
  const lastItem = tasks[tasks.length - 1];

  tasks.push({
    id_number: lastItem ? lastItem.id_number + 1 : 1,
    task: newTask,
    completed: false,
  });

  writeToFile(JSON.stringify(tasks));

  const taskNum = tasks[tasks.length - 1].id_number;

  console.log(`Created task ${taskNum}: ${newTask}`);
};

module.exports = add;
