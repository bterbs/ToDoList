const fs = require('fs');
const newTask = process.argv.slice(3).join(' ');
let itemCounter = 0;

    try {
        let list = fs.readFileSync('./myList.json');

        if (list.exists()) {
            add(newTask);
        }
    }
    catch (e) {
      fs.writeFileSync('./myList.json', itemCounter);
    }

const add = (newTask) => {
      let listFile = fs.readFileSync('./myList.json', 'utf8');
      let listArr = [];
        listArr.push(JSON.parse(listFile));
        listArr.push(newTask);

      const listJSON = JSON.stringify(listArr);
      fs.writeFileSync('./myList.json', listJSON);
 console.log('added ' + newTask)
};

module.exports = add;
