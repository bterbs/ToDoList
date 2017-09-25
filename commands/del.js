const fs = require('fs');
const task_id = process.argv.slice(3).join(' ');
let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

const del = () => {
  var removed = []
  const newArr = []
  for (var i = 0; i <listArr.length; i++) {
    if(listArr[i].id_number != task_id) {
      newArr.push(listArr[i]);
    } else {
      removed.push(listArr[i]);
    };
  };

  const listJSON = JSON.stringify(newArr);
  fs.writeFileSync('./myList.json', listJSON);

  console.log('Deleted task ' + removed[0].id_number + ': ' + removed[0].task);
};


module.exports = del;
