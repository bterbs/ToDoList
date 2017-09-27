const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio')
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';

const add = (newTask) => {
        let listArr = readFromFile(taskFile);
        const lastItem = listArr[listArr.length - 1];

        listArr.push({
          "id_number": lastItem ? lastItem.id_number + 1 : 1,
          "task": newTask,
          "completed": false,
        });

        const listJSON = JSON.stringify(listArr);
        writeToFile(listJSON);

        let taskNum = listArr[listArr.length-1].id_number;

        console.log(`Created task ${taskNum}: ${newTask}`);

 };


module.exports = add;
