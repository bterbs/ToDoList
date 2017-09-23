const fs = require('fs');
const task_id = process.argv[3];
let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

const complete = (task_id) => {
  console.log('Completed task ' + [task_id] + ': ' + listArr[task_id]);
};






module.exports = complete;
