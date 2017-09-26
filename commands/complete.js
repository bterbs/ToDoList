const fs = require('fs');
const task_id = (process.argv[3]);
let listArr = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'));

const complete = () => {
  const newArr = []
  var completed
  for (var i = 0; i <listArr.length; i++) {
    if(listArr[i].id_number != task_id) {
      newArr.push(listArr[i]);
    } else {
      listArr[i].completed = true;
      completed = listArr[i].task;
      newArr.push(listArr[i]);
    };
  };

  const listJSON = JSON.stringify(newArr);
  fs.writeFileSync('./tasks.json', listJSON);

  console.log('Completed task ' + task_id + ': ' + completed);
};

module.exports = complete;
