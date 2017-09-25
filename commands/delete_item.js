const fs = require('fs');
const task_id = process.argv[3];
const newTask = process.argv.slice(3).join(' ');
let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

//delete_items should:
    //read the myList.json file as an array
    //find the item task_id that matches id given by user
    //remove the id from the array
    //write the updated array to the myList.json file
    //console.log('Deleted task ' + task_id + ':' + arr[task_id])

console.log(listArr);



module.exports = delete_item;
