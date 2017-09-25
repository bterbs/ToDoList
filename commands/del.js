const fs = require('fs');
const task_id = process.argv.slice(3).join(' ');
let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));
var index = (task_id-1);
var itemToRemove = listArr[index];

const del = () => {
  listArr.splice(index, 1);

  const listJSON = JSON.stringify(listArr);
  fs.writeFileSync('./myList.json', listJSON);

  console.log('Deleted task ' + task_id + ': ' + itemToRemove);
};


module.exports = del;
