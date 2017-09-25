const fs = require('fs');
const newTask = process.argv.slice(3).join(' ');

if(!fs.existsSync('./myList.json')){
  fs.writeFileSync('./myList.json', '[]');
};

const add = (newTask) => {
        let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));
        const lastItem = listArr[listArr.length - 1]

        listArr.push({
          "id_number": lastItem ? lastItem.id_number + 1 : 1,
          "task": newTask,
          "completed": false,
        });

        const listJSON = JSON.stringify(listArr);
        fs.writeFileSync('./myList.json', listJSON);

        console.log('Created task ' + listArr.length);
 };


module.exports = add;
