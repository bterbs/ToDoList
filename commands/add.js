const fs = require('fs');

const content = fs.readFileSync('./commands/newfile', 'utf8');
fs.writeFileSync('./commands/newfile2.txt', content);

const list = fs.readFileSync('tasks.json', 'utf8')

//what do I want the add function to do???

// I want it to take an argument from the command line eg. add laundry
// add should add laundry to tasks.json, which is my list of tasks
// how would I write that as a function?
//what if it is already on the tasks.json file?
//what if add is passed no argument?
//what if it is passed something that is not a string?

const add = (newTask) => {
//keep this simple- write a function that adds the item to the JSON file.
console.log('ya did it')
};




module.exports = add(itemToDo);
