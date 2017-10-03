const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio');

const add = (newTask) => {
  const listArr = readFromFile(taskFile);
  const lastItem = listArr[listArr.length - 1];

  listArr.push({
    id_number: lastItem ? lastItem.id_number + 1 : 1,
    task: newTask,
    completed: false,
  });

  const listJSON = JSON.stringify(listArr);
  writeToFile(listJSON);

  const taskNum = listArr[listArr.length - 1].id_number;

  console.log(`Created task ${taskNum}: ${newTask}`);
};

module.exports = add;
