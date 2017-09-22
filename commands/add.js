const fs = require('fs');
const newTask = process.argv.slice(3).join(' ');

const add = (newTask) => {
    fs.writeFile("./myList.json", JSON.stringify(newTask), (err) => {
        if (err) {
            console.error(err);
            return;
        };
      });
      console.log(newTask + ' has been added to list');
};

module.exports = add;
