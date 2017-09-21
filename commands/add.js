const fs = require('fs');
const newTask = process.argv.slice(3).join(' ');

const content = fs.readFileSync('./tasks.json', 'utf8');
fs.writeFileSync('./tasks.json', content);

const list = fs.readFileSync('tasks.json', 'utf8')

//what do I want the add function to do???

// I want it to take an argument from the command line eg. add laundry
// add should add laundry to tasks.json, which is my list of tasks
// how would I write that as a function?
//what if it is already on the tasks.json file?
//what if add is passed no argument?
//what if it is passed something that is not a string?

const add = (newTask) => {
console.log(newTask)
};




module.exports = add(newTask);
