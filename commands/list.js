const { taskFile, readFromFile } = require('../fileio/fileio.js');

const list = () => {
  return readFromFile(taskFile, function(items){
    console.log('ID Description');
    console.log('-- -----------');
    let counter = 0;

    items.forEach((item) => {
      if (item.completed === false) {
        console.log(`${item.id_number} ${item.task}`);
        counter += 1;
      }
    });

    console.log(`\nYou have ${counter} tasks`);
  });
};

module.exports = list;
