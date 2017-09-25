const fs = require('fs');
const newTask = process.argv.slice(3).join(' ');


const add = (newTask) => {
    if(!fs.existsSync('./myList.json')){
      fs.writeFileSync('./myList.json', '[]');
      let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

      listArr.push(newTask);
      const listJSON = JSON.stringify(listArr);
      fs.writeFileSync('./myList.json', listJSON);

    } else {
        let listArr = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

        listArr.push(newTask);
        const listJSON = JSON.stringify(listArr);
        fs.writeFileSync('./myList.json', listJSON);

        console.log('Created task ' + listArr.length);
    };

 };


module.exports = add;
