const fs = require('fs');
const task_id = (process.argv[3]);
let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));
const index = (task_id-1);
const itemToRemove = listArr[index];

const complete = () => {
  listArr.splice(index, 1);

  const listJSON = JSON.stringify(listArr);
  fs.writeFileSync('./myList.json', listJSON);

  console.log('Completed task ' + task_id + ': ' + itemToRemove);
};

module.exports = complete;
