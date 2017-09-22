const fs = require('fs');
const newTask = process.argv.slice(3).join(' ');

const add = (newTask) => {
      let listFile = fs.readFileSync('./myList.json', 'utf8');
      let listArr = [];
        listArr.push(JSON.parse(listFile));
        listArr.push(newTask);

      const listJSON = JSON.stringify(listArr);
      fs.writeFileSync('./myList.json', listJSON);

};

module.exports = add;
