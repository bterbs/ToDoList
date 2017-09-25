const fs = require('fs');
const task_id = process.argv.slice(3).join(' ');
let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));
var index = (task_id-1);
var itemToRemove = listArr[index];

//delete_items should:
    //read the myList.json file as an array
    //find the item task_id that matches id given by user
    //remove the id from the array
    //write the updated array to the myList.json file
    //console.log('Deleted task ' + task_id + ':' + arr[task_id])
const del = () => {
  console.log(itemToRemove);
  console.log(listArr.splice(index, 1));
  console.log(listArr);

  const listJSON = JSON.stringify(listArr);
  fs.writeFileSync('./myList.json', listJSON);

  console.log('Deleted task ' + index + ': ' + itemToRemove);
};




module.exports = del;
