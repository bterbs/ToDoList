// bds: this file makes eslint very unhappy on my machine. If you can't get
// bds: eslint to yell you at for most of the lines in this file, let me know
// bds: and we'll troubleshoot together. :-)

const fs = require('fs');
const { readFromFile, writeToFile } = require('../fileio/fileio')

// bds: this taskFile line should be confined to fileio, instead of repeated
// bds: in each of the commands files
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';

const add = (newTask) => {
  // bds: use a more descriptive variable name than listArr -- maybe tasks?
  // bds: also, use const here, since listArr isn't reassigned
        let listArr = readFromFile(taskFile);
        const lastItem = listArr[listArr.length - 1];

        listArr.push({
          // bds: nice use of ternary here!
          "id_number": lastItem ? lastItem.id_number + 1 : 1,
          // bds: 'id' would be a more concise (and equally descriptive) key than 'id_number'
          "task": newTask,
          "completed": false,
        });

        const listJSON = JSON.stringify(listArr);
        writeToFile(listJSON);

        // bds: if you calculate the taskNum above the listArr.push line,
        // bds: you can use the calculated number both in creating the task
        // bds: object, and in this line, which saves some work.
        let taskNum = listArr[listArr.length-1].id_number;

        // bds: nice use of template literal. :-)
        console.log(`Created task ${taskNum}: ${newTask}`);

 };


module.exports = add;
