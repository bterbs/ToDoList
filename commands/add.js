const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio')
const newTask = process.argv.slice(3).join(' ');
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

        console.log('Created task ' );

 };


module.exports = add;
