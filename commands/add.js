const { readFromFile, writeToFile, taskFile } = require('../fileio/fileio');

const newTask = process.argv.slice(3).join(' ');

const add = function (newTask) {
  return readFromFile(taskFile, processFile)
};

/* processFile accepts the parsedJSON 'tasks' file as an argument
 and modifies it, it adds to the tasks list and is run as a callback
 so that it will be run AFTER fs.readFile returns in the readFromFile
 function
 */
const processFile = function(tasks){
  const lastItem = tasks[tasks.length - 1];

  tasks.push({
    id_number: lastItem ? lastItem.id_number + 1 : 1,
    task: newTask,
    completed: false,
  });

  writeToFile(JSON.stringify(tasks));

  const taskNum = tasks[tasks.length - 1].id_number;

  console.log(`Created task ${taskNum}: ${newTask}`);
}


module.exports = add;
